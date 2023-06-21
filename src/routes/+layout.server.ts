// root

import type { LayoutServerLoad } from './$types';
import { dev } from '$app/environment';
import { SPACE_ID, DELIVERY_TOKEN } from '$env/static/private';

const cacheLifetime = 60000 * 30; // 30 min

const contentful = {
  url: `https://cdn.contentful.com/spaces/${SPACE_ID}/entries`,
  opts: {
    headers: {
      Authorization: `Bearer ${DELIVERY_TOKEN}`,
    },
  },
};

export const load = (async ({ fetch, setHeaders, cookies }) => {
  const themeCookie = cookies.get('theme');

  if (dev) console.time('fetching from contentful...');
  const contentfulResponse = await fetch(contentful.url, contentful.opts);
  const contentfulJson = await contentfulResponse.json();
  if (dev) console.timeEnd('fetching from contentful...');

  // only use in prod due to issue with live dev server
  // 'Cache-Control Headers not set' error hides other errors
  if (!dev && cacheLifetime) {
    setHeaders({ 'Cache-Control': `max-age=${cacheLifetime}` });
  }

  return {
    contentfulData: contentfulJson,
    themeCookie,
  };
}) satisfies LayoutServerLoad;
