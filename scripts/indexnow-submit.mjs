#!/usr/bin/env node
/**
 * Submit the site's URLs to IndexNow (Bing, Yandex, Naver, Seznam).
 *
 * The IndexNow key is hosted at:
 *   https://www.iptv-americas.tv/1894c1401b350972ae09bac4e49ada4c.txt
 *
 * Google does NOT use IndexNow — this only speeds up non-Google engines.
 * Run AFTER a production deploy so the submitted URLs are already live:
 *
 *   node scripts/indexnow-submit.mjs
 *
 * URLs are read from build/sitemap.xml, so run `npm run build` first.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HOST = 'www.iptv-americas.tv';
const KEY = '1894c1401b350972ae09bac4e49ada4c';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = join(root, 'build', 'sitemap.xml');

let xml;
try {
  xml = readFileSync(sitemapPath, 'utf8');
} catch {
  console.error(`Could not read ${sitemapPath}. Run "npm run build" first.`);
  process.exit(1);
}

const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) {
  console.error('No <loc> URLs found in sitemap.');
  process.exit(1);
}

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

console.log(`Submitted ${urlList.length} URLs to IndexNow → HTTP ${res.status} ${res.statusText}`);
urlList.forEach((u) => console.log(`  ${u}`));
if (!res.ok) {
  console.error('IndexNow rejected the request. 200/202 = accepted; 403 = key not found; 422 = URL/host mismatch.');
  process.exit(1);
}
