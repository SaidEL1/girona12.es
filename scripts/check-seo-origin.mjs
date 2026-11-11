#!/usr/bin/env node
/**
 * Guard: crawl-facing SEO origin must stay on the live Netlify host until
 * DOMAIN_CUTOVER_COMPLETE is explicitly set to true in src/lib/site-url.ts.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "src/lib/site-url.ts"), "utf8");

const cutoverMatch = source.match(
  /export const DOMAIN_CUTOVER_COMPLETE = (true|false) as const/,
);
if (!cutoverMatch) {
  console.error(
    "SEO origin guard: DOMAIN_CUTOVER_COMPLETE declaration not found in src/lib/site-url.ts",
  );
  process.exit(1);
}

const cutoverComplete = cutoverMatch[1] === "true";
const netlify = "https://girona12.netlify.app";
const future = "https://gerona12.es";

if (!source.includes(`export const NETLIFY_ORIGIN = "${netlify}"`)) {
  console.error(`SEO origin guard: NETLIFY_ORIGIN must be ${netlify}`);
  process.exit(1);
}

if (!source.includes(`export const FUTURE_SITE_ORIGIN = "${future}"`)) {
  console.error(`SEO origin guard: FUTURE_SITE_ORIGIN must be ${future}`);
  process.exit(1);
}

if (!cutoverComplete) {
  // CRAWL_ORIGIN expression must prefer NETLIFY while flag is false.
  if (
    !source.includes(
      "DOMAIN_CUTOVER_COMPLETE ? FUTURE_SITE_ORIGIN : NETLIFY_ORIGIN",
    )
  ) {
    console.error(
      "SEO origin guard: CRAWL_ORIGIN must select NETLIFY_ORIGIN while cutover is incomplete",
    );
    process.exit(1);
  }

  // Fail if anyone hard-codes the future origin as SITE_ORIGIN / CRAWL_ORIGIN default.
  const badHardcode = /export const (SITE_ORIGIN|CRAWL_ORIGIN) = "https:\/\/gerona12\.es"/;
  if (badHardcode.test(source)) {
    console.error(
      "SEO origin guard: crawl origin must not hard-code https://gerona12.es before cutover",
    );
    process.exit(1);
  }

  console.log(
    `SEO origin guard OK — DOMAIN_CUTOVER_COMPLETE=false; crawl origin stays ${netlify}`,
  );
} else {
  console.log(
    `SEO origin guard OK — DOMAIN_CUTOVER_COMPLETE=true; crawl origin may use ${future}`,
  );
}
