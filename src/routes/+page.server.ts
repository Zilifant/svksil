// bio server

import type { PageServerLoad } from './$types';
import { SPACE_ID, DELIVERY_TOKEN } from '$env/static/private';

const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries`;
const opts = { headers: { Authorization: `Bearer ${DELIVERY_TOKEN}` } };

export const load = (async ({ fetch }) => {
  const response = await fetch(url, opts);
  const json = await response.json();

  return { contentfulData: json };
}) satisfies PageServerLoad;
