#!/usr/bin/env node
/**
 * Guardrails against cross-locale copy leaks in marketing dictionaries.
 * Run: node scripts/check-locale-consistency.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = {
  es: fs.readFileSync(path.join(root, "src/data/i18n/es.ts"), "utf8"),
  en: fs.readFileSync(path.join(root, "src/data/i18n/en.ts"), "utf8"),
  ar: fs.readFileSync(path.join(root, "src/data/i18n/ar.ts"), "utf8"),
};

const errors = [];

function extractCtas(source) {
  return [...source.matchAll(/cta(?:Menu|Discover|Contact)?:\s*"([^"]+)"/g)].map(
    (m) => m[1],
  );
}

const spanishMarkers =
  /\b(Ver nuestra|Descubre|Consulte|Galería|Contacto)\b/i;
const englishMarkers =
  /\b(Explore Our|Discover Our|View our|Skip to|Contact Us)\b/i;

for (const cta of extractCtas(files.en)) {
  if (spanishMarkers.test(cta)) {
    errors.push(`EN dictionary has Spanish CTA leak: "${cta}"`);
  }
}
for (const cta of extractCtas(files.ar)) {
  if (spanishMarkers.test(cta) || englishMarkers.test(cta)) {
    errors.push(`AR dictionary has non-Arabic CTA leak: "${cta}"`);
  }
}
for (const cta of extractCtas(files.es)) {
  if (englishMarkers.test(cta)) {
    errors.push(`ES dictionary has English CTA leak: "${cta}"`);
  }
}

if (!files.en.includes('cta: "View our menu"')) {
  errors.push('EN digitalMenu.cta must be "View our menu"');
}
if (!files.ar.includes("عرض قائمتنا")) {
  errors.push("AR digitalMenu.cta must be Arabic");
}
if (!files.ar.includes('wordmark: "GERONA 12"')) {
  errors.push('AR brand.wordmark must remain Latin "GERONA 12"');
}

if (errors.length) {
  console.error(
    "Locale consistency failed:\n" + errors.map((e) => ` - ${e}`).join("\n"),
  );
  process.exit(1);
}

console.log("Locale consistency OK (dictionary CTA / brand guards).");
