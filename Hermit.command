#!/bin/zsh
cd "$(dirname "$0")"
exec node scripts/open-app.mjs --open
