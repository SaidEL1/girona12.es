"use client";

import {
  useCallback,
  useEffect,
  useEffectEvent,
  useId,
  useRef,
  useState,
} from "react";
import {
  ORIGINAL_MENU_PAGE_COUNT,
  ORIGINAL_MENU_PAGES,
} from "@/data/menu-pages";
import { cn } from "@/lib/cn";

type OriginalMenuViewerProps = {
  brandWordmark: string;
  brandName: string;
  previousLabel: string;
  nextLabel: string;
  pageLabel: string;
  jumpLabel: string;
  jumpTitle: string;
  jumpConfirm: string;
  jumpCancel: string;
};

const EAGER_COUNT = 2;

export function OriginalMenuViewer({
  brandWordmark,
  brandName,
  previousLabel,
  nextLabel,
  pageLabel,
  jumpLabel,
  jumpTitle,
  jumpConfirm,
  jumpCancel,
}: OriginalMenuViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpOpen, setJumpOpen] = useState(false);
  const [jumpValue, setJumpValue] = useState("1");
  const pageRefs = useRef<Array<HTMLElement | null>>([]);
  const dialogId = useId();
  const jumpingRef = useRef(false);

  const scrollToPage = useCallback((page: number) => {
    const clamped = Math.min(
      ORIGINAL_MENU_PAGE_COUNT,
      Math.max(1, Math.round(page)),
    );
    const node = pageRefs.current[clamped - 1];
    if (!node) return;
    jumpingRef.current = true;
    setCurrentPage(clamped);
    node.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      jumpingRef.current = false;
    }, 700);
  }, []);

  const onIntersect = useEffectEvent((entries: IntersectionObserverEntry[]) => {
    if (jumpingRef.current) return;
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    const top = visible[0];
    if (!top?.target) return;
    const raw = (top.target as HTMLElement).dataset.page;
    const page = raw ? Number(raw) : NaN;
    if (!Number.isFinite(page)) return;
    setCurrentPage(page);
  });

  useEffect(() => {
    const nodes = pageRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      // Bias toward the page under the sticky chrome
      rootMargin: "-30% 0px -45% 0px",
      threshold: [0.15, 0.35, 0.55, 0.75],
    });

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        scrollToPage(currentPage + 1);
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        scrollToPage(currentPage - 1);
      } else if (event.key === "Home") {
        event.preventDefault();
        scrollToPage(1);
      } else if (event.key === "End") {
        event.preventDefault();
        scrollToPage(ORIGINAL_MENU_PAGE_COUNT);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentPage, scrollToPage]);

  const atStart = currentPage <= 1;
  const atEnd = currentPage >= ORIGINAL_MENU_PAGE_COUNT;

  const openJump = () => {
    setJumpValue(String(currentPage));
    setJumpOpen(true);
  };

  const confirmJump = () => {
    const next = Number(jumpValue);
    if (!Number.isFinite(next)) return;
    setJumpOpen(false);
    scrollToPage(next);
  };

  return (
    <div className="bg-[var(--color-deep-green)] text-[var(--color-ivory)]">
      <div className="sticky top-[3.75rem] z-40 border-b border-[var(--color-gold)]/35 bg-[var(--color-deep-green)]/95 backdrop-blur-md sm:top-[4.25rem]">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-lg leading-none tracking-[0.04em] text-[var(--color-gold)] sm:text-xl">
              {brandWordmark}
            </p>
            <p className="mt-0.5 truncate text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-ivory)]/70">
              {brandName}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => scrollToPage(currentPage - 1)}
              disabled={atStart}
              aria-label={previousLabel}
              className="inline-flex min-h-10 min-w-10 items-center justify-center border border-[var(--color-gold)]/55 px-2 text-xs uppercase tracking-[0.14em] text-[var(--color-gold)] transition-colors enabled:hover:bg-[var(--color-gold)]/10 disabled:cursor-not-allowed disabled:opacity-35"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={openJump}
              aria-haspopup="dialog"
              aria-expanded={jumpOpen}
              aria-controls={dialogId}
              aria-label={jumpLabel}
              className="ltr-isolate min-h-10 min-w-[5.5rem] border border-[var(--color-gold)]/55 bg-[var(--color-emerald)]/35 px-2 font-display text-base text-[var(--color-ivory)] transition-colors hover:border-[var(--color-gold)] sm:min-w-[6.5rem] sm:text-lg"
            >
              <span className="sr-only">{pageLabel}: </span>
              {currentPage}
              <span className="mx-1 text-[var(--color-gold)]/80">/</span>
              {ORIGINAL_MENU_PAGE_COUNT}
            </button>

            <button
              type="button"
              onClick={() => scrollToPage(currentPage + 1)}
              disabled={atEnd}
              aria-label={nextLabel}
              className="inline-flex min-h-10 min-w-10 items-center justify-center border border-[var(--color-gold)]/55 px-2 text-xs uppercase tracking-[0.14em] text-[var(--color-gold)] transition-colors enabled:hover:bg-[var(--color-gold)]/10 disabled:cursor-not-allowed disabled:opacity-35"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-0 pb-16 pt-3 sm:gap-6 sm:px-4 sm:pb-24 sm:pt-5">
        {ORIGINAL_MENU_PAGES.map((page, index) => (
          <article
            key={page.id}
            id={page.id}
            data-page={page.number}
            ref={(node) => {
              pageRefs.current[index] = node;
            }}
            className="scroll-mt-[7.5rem] bg-[var(--color-deep-green)] sm:scroll-mt-[8.5rem]"
          >
            {/* Native <img> preserves original JPEG bytes (no Next optimizer). */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.src}
              alt={page.alt}
              width={page.width}
              height={page.height}
              decoding="async"
              loading={index < EAGER_COUNT ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              draggable={false}
              className={cn(
                "block h-auto w-full max-w-full select-none",
                "shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
              )}
            />
          </article>
        ))}
      </div>

      {jumpOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/55 p-4 sm:items-center"
          role="presentation"
          onClick={() => setJumpOpen(false)}
        >
          <div
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${dialogId}-title`}
            className="w-full max-w-sm border border-[var(--color-gold)]/50 bg-[var(--color-deep-green)] p-5 text-[var(--color-ivory)] shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id={`${dialogId}-title`}
              className="font-display text-2xl text-[var(--color-gold)]"
            >
              {jumpTitle}
            </h2>
            <label className="mt-4 block text-sm text-[var(--color-ivory)]/80">
              {pageLabel}
              <input
                type="number"
                min={1}
                max={ORIGINAL_MENU_PAGE_COUNT}
                value={jumpValue}
                onChange={(event) => setJumpValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    confirmJump();
                  }
                  if (event.key === "Escape") setJumpOpen(false);
                }}
                className="ltr-isolate mt-2 w-full border border-[var(--color-gold)]/45 bg-[var(--color-emerald)]/30 px-3 py-2 text-lg text-[var(--color-ivory)] outline-none focus:border-[var(--color-gold)]"
                autoFocus
              />
            </label>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setJumpOpen(false)}
                className="min-h-11 flex-1 border border-[var(--color-ivory)]/35 px-3 text-xs uppercase tracking-[0.14em]"
              >
                {jumpCancel}
              </button>
              <button
                type="button"
                onClick={confirmJump}
                className="min-h-11 flex-1 bg-[var(--color-gold)] px-3 text-xs uppercase tracking-[0.14em] text-[var(--color-deep-green)]"
              >
                {jumpConfirm}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
