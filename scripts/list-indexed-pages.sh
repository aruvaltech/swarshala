#!/usr/bin/env bash
# Lists all pages currently indexed on Google for swarshala.com
# Uses Google Search Console API with gcloud application-default credentials
# No .env or API keys needed — just: gcloud auth application-default login

set -euo pipefail

SITE="sc-domain:swarshala.com"
PROJECT="web-landing-484909"

TOKEN=$(gcloud auth application-default print-access-token --project="$PROJECT" 2>/dev/null) || {
  echo "ERROR: Could not get access token. Run:"
  echo "  gcloud auth application-default login \\"
  echo "    --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/webmasters"
  exit 1
}

ENCODED_SITE=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$SITE', safe=''))")

echo "=== Sitemaps submitted for $SITE ==="
echo ""

SITEMAPS_RESPONSE=$(curl -s -w "\n%{http_code}" \
  "https://searchconsole.googleapis.com/webmasters/v3/sites/${ENCODED_SITE}/sitemaps" \
  -H "Authorization: Bearer $TOKEN" \
  -H "x-goog-user-project: $PROJECT")

HTTP_CODE=$(echo "$SITEMAPS_RESPONSE" | tail -1)
BODY=$(echo "$SITEMAPS_RESPONSE" | sed '$d')

if [ "$HTTP_CODE" != "200" ]; then
  echo "ERROR: API returned HTTP $HTTP_CODE"
  echo "$BODY"
  exit 1
fi

echo "$BODY" | python3 -c "
import json, sys
data = json.load(sys.stdin)
sitemaps = data.get('sitemap', [])
if not sitemaps:
    print('No sitemaps found.')
else:
    for s in sitemaps:
        path = s.get('path', 'N/A')
        submitted = s.get('lastSubmitted', 'N/A')
        errors = s.get('errors', 0)
        warnings = s.get('warnings', 0)
        print(f'  {path}')
        print(f'    Last submitted: {submitted}')
        print(f'    Errors: {errors} | Warnings: {warnings}')
        contents = s.get('contents', [])
        for c in contents:
            ctype = c.get('type', 'N/A')
            count = c.get('submitted', 0)
            indexed = c.get('indexed', 0)
            print(f'    {ctype}: {count} submitted, {indexed} indexed')
        print()
"

echo ""
echo "=== URL Inspection (sampled pages) ==="
echo ""

# Fetch the sitemap XML to get actual page URLs
SITEMAP_XML=$(curl -s "https://swarshala.com/sitemap.xml")

URLS=$(echo "$SITEMAP_XML" | python3 -c "
import sys, re
content = sys.stdin.read()
urls = re.findall(r'<loc>(https?://[^<]+)</loc>', content)
for u in urls:
    print(u)
")

TOTAL=$(echo "$URLS" | wc -l | tr -d ' ')
echo "Found $TOTAL URLs in sitemap.xml"
echo ""

# Inspect up to 50 URLs (API has quota limits)
COUNT=0
INDEXED=0
NOT_INDEXED=0

while IFS= read -r url; do
  [ -z "$url" ] && continue
  COUNT=$((COUNT + 1))
  if [ $COUNT -gt 50 ]; then
    echo "... (showing first 50 of $TOTAL URLs, quota limited)"
    break
  fi

  INSPECT=$(curl -s \
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect" \
    -H "Authorization: Bearer $TOKEN" \
    -H "x-goog-user-project: $PROJECT" \
    -H "Content-Type: application/json" \
    -d "{\"inspectionUrl\": \"$url\", \"siteUrl\": \"$SITE\"}")

  VERDICT=$(echo "$INSPECT" | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    result = data.get('inspectionResult', {})
    index_status = result.get('indexStatusResult', {})
    verdict = index_status.get('verdict', 'UNKNOWN')
    coverage = index_status.get('coverageState', 'N/A')
    print(f'{verdict}|{coverage}')
except:
    print('ERROR|N/A')
" 2>/dev/null)

  STATUS=$(echo "$VERDICT" | cut -d'|' -f1)
  COVERAGE=$(echo "$VERDICT" | cut -d'|' -f2)

  if [ "$STATUS" = "PASS" ]; then
    INDEXED=$((INDEXED + 1))
    echo "  ✅ $url"
  elif [ "$STATUS" = "ERROR" ]; then
    echo "  ⚠️  $url (API error)"
  else
    NOT_INDEXED=$((NOT_INDEXED + 1))
    echo "  ❌ $url ($COVERAGE)"
  fi

  # Rate limiting — be nice to the API
  sleep 0.5
done <<< "$URLS"

echo ""
echo "=== Summary ==="
echo "Total in sitemap: $TOTAL"
echo "Inspected: $COUNT"
echo "Indexed: $INDEXED"
echo "Not indexed: $NOT_INDEXED"
