#!/usr/bin/env node
/**
 * Guard: crawl-facing SEO origin must stay on a verified host.
 *
 * - While DOMAIN_CUTOVER_COMPLETE is false and NETLIFY_HOSTNAME_RENAMED is false,
 *   CRAWL_ORIGIN must resolve to the verified live Netlify host
 *   (https://gerona12.netlify.app).
 * - Do not hard-code https://gerona12.es, https://gerona12.es.netlify.app, or the
 *   retired https://girona12.netlify.app as the crawl default before the matching
 *   flag is flipped / without TD GO.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "src/lib/site-url.ts"), "utf8");

function readBoolFlag(name) {
  const match = source.match(
    new RegExp(`export const ${name} = (true|false) as const`),
  );
  if (!match) {
    console.error(`SEO origin guard: ${name} declaration not found`);
    process.exit(1);
  }
  return match[1] === "true";
}

const cutoverComplete = readBoolFlag("DOMAIN_CUTOVER_COMPLETE");
const netlifyRenamed = readBoolFlag("NETLIFY_HOSTNAME_RENAMED");

const live = "https://gerona12.netlify.app";
const former = "https://girona12.netlify.app";
const intendedNetlify = "https://gerona12.es.netlify.app";
const future = "https://gerona12.es";

const required = [
  [`export const LIVE_NETLIFY_ORIGIN = "${live}"`, "LIVE_NETLIFY_ORIGIN"],
  [
    `export const INTENDED_NETLIFY_ORIGIN =\n  "${intendedNetlify}"`,
    "INTENDED_NETLIFY_ORIGIN",
  ],
  [`export const FUTURE_SITE_ORIGIN = "${future}"`, "FUTURE_SITE_ORIGIN"],
  [`export const FORMER_NETLIFY_ORIGIN = "${former}"`, "FORMER_NETLIFY_ORIGIN"],
];

for (const [needle, label] of required) {
  if (!source.includes(needle)) {
    if (
      label === "INTENDED_NETLIFY_ORIGIN" &&
      source.includes(
        `export const INTENDED_NETLIFY_ORIGIN = "${intendedNetlify}"`,
      )
    ) {
      continue;
    }
    console.error(`SEO origin guard: ${label} must be declared as ${needle}`);
    process.exit(1);
  }
}

if (!source.includes("export const NETLIFY_ORIGIN = LIVE_NETLIFY_ORIGIN")) {
  console.error(
    "SEO origin guard: NETLIFY_ORIGIN must alias LIVE_NETLIFY_ORIGIN",
  );
  process.exit(1);
}

const crawlSelectorOk =
  source.includes("DOMAIN_CUTOVER_COMPLETE") &&
  source.includes("NETLIFY_HOSTNAME_RENAMED") &&
  source.includes("INTENDED_NETLIFY_ORIGIN") &&
  source.includes("LIVE_NETLIFY_ORIGIN") &&
  /export const CRAWL_ORIGIN = \(/.test(source);

if (!crawlSelectorOk) {
  console.error(
    "SEO origin guard: CRAWL_ORIGIN must select FUTURE → INTENDED_NETLIFY → LIVE",
  );
  process.exit(1);
}

const badHardcode =
  /export const (SITE_ORIGIN|CRAWL_ORIGIN|LIVE_NETLIFY_ORIGIN) = "https:\/\/(gerona12\.es|gerona12\.es\.netlify\.app|girona12\.netlify\.app)"/;
if (!cutoverComplete && !netlifyRenamed && badHardcode.test(source)) {
  console.error(
    "SEO origin guard: crawl/live origin must not hard-code an unverified or retired host",
  );
  process.exit(1);
}

// LIVE must not accidentally equal the retired host.
if (source.includes(`LIVE_NETLIFY_ORIGIN = "${former}"`)) {
  console.error(
    `SEO origin guard: LIVE_NETLIFY_ORIGIN must not be the retired host ${former}`,
  );
  process.exit(1);
}

if (cutoverComplete) {
  console.log(
    `SEO origin guard OK — DOMAIN_CUTOVER_COMPLETE=true; crawl may use ${future}`,
  );
} else if (netlifyRenamed) {
  console.log(
    `SEO origin guard OK — NETLIFY_HOSTNAME_RENAMED=true; crawl may use ${intendedNetlify}`,
  );
} else {
  console.log(
    `SEO origin guard OK — flags false; crawl origin stays ${live} (intended ${intendedNetlify} not yet verified; former ${former} retired)`,
  );
}
