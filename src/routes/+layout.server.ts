// root

import type { LayoutServerLoad } from './$types';
import { dev } from '$app/environment';
import {
  JSIO_KEY,
  PORTFOLIO_BIN_ID,
  SPACE_ID,
  DELIVERY_TOKEN,
} from '$env/static/private';

const cacheLifetime = 60000 * 30; // 30 min

const contentful = {
  url: `https://cdn.contentful.com/spaces/${SPACE_ID}/entries`,
  opts: {
    headers: {
      Authorization: `Bearer ${DELIVERY_TOKEN}`,
    },
  },
};

const jsonbin = {
  url: `https://api.jsonbin.io/v3/b/${PORTFOLIO_BIN_ID}/latest`,
  opts: {
    headers: {
      'X-Master-Key': JSIO_KEY.replaceAll('a', '$'),
    },
  },
};

export const load = (async ({ fetch, setHeaders, cookies }) => {
  const themeCookie = cookies.get('theme');

  if (dev) console.time('fetching from contentful...');
  const contentfulResponse = await fetch(contentful.url, contentful.opts);
  const contentfulJson = await contentfulResponse.json();
  if (dev) console.timeEnd('fetching from contentful...');

  if (dev) console.time('fetching from jsonbin...');
  const jsonbinResponse = await fetch(jsonbin.url, jsonbin.opts);
  const jsonBinJson = await jsonbinResponse.json();
  if (dev) console.timeEnd('fetching from jsonbin...');

  if (cacheLifetime) {
    setHeaders({ 'Cache-Control': `max-age=${cacheLifetime}` });
  }

  return {
    contentfulData: contentfulJson,
    jsioRecord: jsonBinJson.record,
    themeCookie,
  };
}) satisfies LayoutServerLoad;
