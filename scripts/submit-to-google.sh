#!/usr/bin/env bash
# Submits all sitemaps to Google Search Console for indexing
# Uses Google Search Console API with gcloud application-default credentials
# No .env or API keys needed — just: gcloud auth application-default login

set -euo pipefail

SITE="sc-domain:swarshala.com"
SITE_URL="https://swarshala.com"
PROJECT="web-landing-484909"

# All sitemaps to submit
SITEMAPS=(
  "${SITE_URL}/sitemap.xml"
)

TOKEN=$(gcloud auth application-default print-access-token --project="$PROJECT" 2>/dev/null) || {
  echo "ERROR: Could not get access token. Run:"
  echo "  gcloud auth application-default login \\"
  echo "    --scopes=https://www.googleapis.com/auth/cloud-platform,https://www.googleapis.com/auth/webmasters"
  exit 1
}

ENCODED_SITE=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$SITE', safe=''))")

echo "=== Submitting sitemaps for $SITE ==="
echo ""

for SITEMAP in "${SITEMAPS[@]}"; do
  ENCODED_SITEMAP=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$SITEMAP', safe=''))")

  RESPONSE=$(curl -s -w "\n%{http_code}" -X PUT \
    "https://searchconsole.googleapis.com/webmasters/v3/sites/${ENCODED_SITE}/sitemaps/${ENCODED_SITEMAP}" \
    -H "Authorization: Bearer $TOKEN" \
    -H "x-goog-user-project: $PROJECT" \
    -H "Content-Type: application/json")

  HTTP_CODE=$(echo "$RESPONSE" | tail -1)

  if [ "$HTTP_CODE" = "204" ] || [ "$HTTP_CODE" = "200" ]; then
    echo "  ✅ Submitted: $SITEMAP"
  else
    BODY=$(echo "$RESPONSE" | sed '$d')
    echo "  ❌ Failed ($HTTP_CODE): $SITEMAP"
    echo "     $BODY"
  fi
done

echo ""
echo "=== Submitting individual URLs via Indexing API ==="
echo ""

# Fetch sitemap to get all page URLs
SITEMAP_XML=$(curl -s "${SITE_URL}/sitemap.xml")

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

SUBMITTED=0
FAILED=0
RATE_LIMITED=0
SLEEP_TIME=1

submit_url() {
  local url="$1"
  local retries=0
  local max_retries=5
  local backoff=$SLEEP_TIME

  while [ $retries -le $max_retries ]; do
    RESPONSE=$(curl -s -w "\n%{http_code}" \
      "https://indexing.googleapis.com/v3/urlNotifications:publish" \
      -H "Authorization: Bearer $TOKEN" \
      -H "x-goog-user-project: $PROJECT" \
      -H "Content-Type: application/json" \
      -d "{\"url\": \"$url\", \"type\": \"URL_UPDATED\"}")

    HTTP_CODE=$(echo "$RESPONSE" | tail -1)

    if [ "$HTTP_CODE" = "200" ]; then
      SUBMITTED=$((SUBMITTED + 1))
      echo "  ✅ [$SUBMITTED/$TOTAL] $url"
      return 0
    elif [ "$HTTP_CODE" = "429" ]; then
      retries=$((retries + 1))
      if [ $retries -le $max_retries ]; then
        echo "  ⏳ Rate limited on $url — waiting ${backoff}s (retry $retries/$max_retries)"
        sleep "$backoff"
        backoff=$((backoff * 2))
      fi
    else
      BODY=$(echo "$RESPONSE" | sed '$d')
      echo "  ❌ $url (HTTP $HTTP_CODE)"
      [ $FAILED -le 3 ] && echo "     $BODY" | head -2
      FAILED=$((FAILED + 1))
      return 1
    fi
  done

  echo "  ❌ $url (rate limited after $max_retries retries)"
  RATE_LIMITED=$((RATE_LIMITED + 1))
  return 1
}

while IFS= read -r url; do
  [ -z "$url" ] && continue
  submit_url "$url"
  sleep "$SLEEP_TIME"
done <<< "$URLS"

echo ""
echo "=== Summary ==="
echo "Total URLs: $TOTAL"
echo "Submitted: $SUBMITTED"
echo "Failed: $FAILED"
echo "Rate limited (exhausted retries): $RATE_LIMITED"
if [ $RATE_LIMITED -gt 0 ] || [ $FAILED -gt 0 ]; then
  echo ""
  echo "Tip: Re-run this script to retry failed URLs. Google allows ~200 requests/day."
fi
