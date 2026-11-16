# scripts

`check_site.py` verifies the site in `docs/` with only the Python standard library (and `node --check` for JavaScript syntax):

```bash
python3 scripts/check_site.py            # verify; exit code 1 on any problem
python3 scripts/check_site.py --update   # refresh scripts/site-manifest.json after an intended change
```

It fails on: missing or root-absolute resources (these break under the `/wuyi060531-del/` Pages sub-path), external
assets, dead in-page anchors, JavaScript syntax errors, files that differ from `site-manifest.json`, evidence
screenshots whose SHA-256 differs from `docs/evidence/README.md`, size over budget, and private data (emails other
than GitHub noreply, long digit runs, local paths, secret-like strings). The same script runs in
`.github/workflows/site-check.yml`.
