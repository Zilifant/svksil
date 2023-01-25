// root

import type { PageServerLoad } from './$types';
import { JSIO_KEY, PORTFOLIO_BIN_ID } from '$env/static/private';

const url = `https://api.jsonbin.io/v3/b/${PORTFOLIO_BIN_ID}/latest`;
const opts = {
  headers: {
    'X-Master-Key': JSIO_KEY.replaceAll('a', '$'),
  },
};
const cacheLifetime = 0;

export const load = (async ({ fetch, setHeaders }) => {
  const response = await fetch(url, opts);
  const json = await response.json();

  if (cacheLifetime) {
    setHeaders({ 'Cache-Control': `max-age=${cacheLifetime}` });
  }

  return { record: json.record };
}) satisfies PageServerLoad;
