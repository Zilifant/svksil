// Utilities

import type { PageId, Animation } from '$lib/types';
import { pageIds, pages } from '$lib/constants';
import { browser } from '$app/environment';

//------------//
//Random Quote//
//------------//

export function sample<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

//----------------------------//
//Fly Direction on Page Switch//
//----------------------------//

// Compare relative 'position' of pages to determine fly direction.
export function setFlyDirection(fromPgId: PageId, toPgId: PageId): Animation {
  const fromPgPos: number = pages.find((pg) => pg.id === fromPgId)?.pos || 0;
  const toPgPos: number = pages.find((pg) => pg.id === toPgId)?.pos || 1;

  return fromPgPos > toPgPos ? 'flyRight' : 'flyLeft';
}

//---------------------//
//Identify Initial Page//
//---------------------//

// Check if URL includes a hash associated with a specific page.
// If so, return that page id, otherwise, return the first page in
// `pageIds` array (the default/landing page).
export function getInitialPageId(): PageId {
  // console.log('browser', browser);
  if (!browser) return pageIds[0]; //!!!

  const targetPg = window.location.hash.substring(1);
  const isViablePg = pageIds.includes(targetPg);
  if (isViablePg) return targetPg;
  return pageIds[0];
}

//----//
//Misc//
//----//

// TODO: Check if this is still needed with current version of Safari.
export function applySafariNavFix() {
  if (!browser) return; //!!!

  const prevPage = document.getElementsByClassName('prev');
  if (prevPage[0]) prevPage[0].classList.replace('prev', 'not-prev');
}
