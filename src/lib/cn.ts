/**
 * Tiny className joiner — avoids an extra dependency for Phase 01.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
