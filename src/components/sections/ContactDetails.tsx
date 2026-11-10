import { GeometricSeparator } from "@/components/brand";
import { GeometricAccent } from "@/components/ui";
import {
  emailMailtoHref,
  phoneTelHref,
  siteConfig,
  verifiedAddress,
} from "@/data/site";
import type { Dictionary } from "@/types";

type ContactDetailsProps = {
  dictionary: Dictionary;
  /** Full page panel vs compact footer strip */
  variant?: "page" | "footer";
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

/**
 * Verified business-card contact block.
 * Phone / email / address only — no hours, WhatsApp, or social URLs.
 */
export function ContactDetails({
  dictionary,
  variant = "page",
}: ContactDetailsProps) {
  const copy = dictionary.sections.contact;
  const phone = siteConfig.contact.phone!;
  const email = siteConfig.contact.email!;
  const mapUrl = siteConfig.location.mapUrl!;
  const legalName = siteConfig.legalName ?? siteConfig.brandName;

  if (variant === "footer") {
    return (
      <div className="space-y-3 text-sm leading-relaxed text-[var(--color-ivory)]/75">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold)]">
          {copy.detailsLabel}
        </p>
        <ul className="space-y-2">
          <li>
            <a
              href={phoneTelHref(phone)}
              className="ltr-isolate inline-flex min-h-11 items-center gap-2 transition-colors hover:text-[var(--color-gold)]"
            >
              <PhoneIcon className="size-4 shrink-0 text-[var(--color-gold)]" />
              <span>{phone}</span>
            </a>
          </li>
          <li>
            <a
              href={emailMailtoHref(email)}
              className="ltr-isolate inline-flex min-h-11 items-center gap-2 break-all transition-colors hover:text-[var(--color-gold)]"
            >
              <MailIcon className="size-4 shrink-0 text-[var(--color-gold)]" />
              <span>{email}</span>
            </a>
          </li>
          <li>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-start gap-2 transition-colors hover:text-[var(--color-gold)]"
            >
              <PinIcon className="mt-0.5 size-4 shrink-0 text-[var(--color-gold)]" />
              <span className="ltr-isolate">{verifiedAddress}</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }

  const rows = [
    {
      key: "phone",
      label: copy.phoneLabel,
      href: phoneTelHref(phone),
      value: phone,
      external: false,
      icon: PhoneIcon,
      isolate: true,
    },
    {
      key: "email",
      label: copy.emailLabel,
      href: emailMailtoHref(email),
      value: email,
      external: false,
      icon: MailIcon,
      isolate: true,
    },
    {
      key: "address",
      label: copy.addressLabel,
      href: mapUrl,
      value: verifiedAddress,
      external: true,
      icon: PinIcon,
      isolate: true,
    },
  ] as const;

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center gap-8 text-center">
      <GeometricAccent tone="gold" />
      <div className="space-y-2">
        <p className="font-display text-3xl tracking-[0.08em] text-[var(--color-gold)] sm:text-4xl">
          {dictionary.brand.wordmark}
        </p>
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-ivory)]/75">
          {dictionary.brand.name}
        </p>
        <p className="sr-only">{legalName}</p>
      </div>
      <GeometricSeparator tone="gold" className="max-w-xs" />

      <ul className="w-full space-y-4 text-start">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <li key={row.key}>
              <a
                href={row.href}
                {...(row.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex min-h-14 items-start gap-4 rounded-sm border border-[var(--color-gold)]/25 bg-[var(--color-emerald)]/25 px-4 py-3.5 transition-colors hover:border-[var(--color-gold)]/55 hover:bg-[var(--color-emerald)]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
              >
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-sm border border-[var(--color-gold)]/35 text-[var(--color-gold)]">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1 space-y-1">
                  <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    {row.label}
                  </span>
                  <span
                    className={`block text-base leading-snug text-[var(--color-ivory)] transition-colors group-hover:text-[var(--color-gold)] sm:text-lg ${
                      row.isolate ? "ltr-isolate" : ""
                    } ${row.key === "email" ? "break-all" : ""}`}
                  >
                    {row.value}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center border border-[var(--color-gold)]/55 bg-[var(--color-gold)]/10 px-6 text-xs uppercase tracking-[0.22em] text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
      >
        {copy.directionsLabel}
      </a>
    </div>
  );
}
