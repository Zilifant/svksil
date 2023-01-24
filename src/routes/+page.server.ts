// root

import type { PageServerLoad } from './$types';
import { JSIO_KEY, PORTFOLIO_BIN_ID } from '$env/static/private';

const url = `https://api.jsonbin.io/v3/b/${PORTFOLIO_BIN_ID}/latest`;
const opts = {
  headers: {
    'X-Master-Key': JSIO_KEY.replaceAll('a', '$'),
  },
};

export const load = (async ({ fetch, setHeaders }) => {
  const response = await fetch(url, opts);
  const json = await response.json();

  setHeaders({ 'Cache-Control': 'max-age=60000' });

  return { content: json.record };
}) satisfies PageServerLoad;
