#!/usr/bin/env bash
# Confirm original menu JPEGs + QR assets remain byte-identical to a snapshot.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SNAPSHOT="${1:-}"
cd "$ROOT"

if [[ -z "$SNAPSHOT" ]]; then
  echo "Usage: $0 <baseline.sha256>"
  echo "Or generate: sha256sum public/menu/pages/*.jpg public/menu/qr/* > baseline.sha256"
  exit 2
fi

while read -r digest path; do
  [[ -z "${digest:-}" ]] && continue
  actual="$(sha256sum "$path" | awk '{print $1}')"
  if [[ "$actual" != "$digest" ]]; then
    echo "CHANGED: $path"
    exit 1
  fi
done < "$SNAPSHOT"

echo "Menu protection OK — all listed assets byte-identical."
