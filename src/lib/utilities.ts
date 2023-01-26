// Utilities

import type { PageId, Animation } from '$lib/types';
import { bio, pageIds, pages } from '$lib/constants';
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

export function setInitialPageId(routeId: string | null): PageId {
  if (!routeId) return bio;
  const id = routeId.slice(1);
  if (pageIds.includes(id)) return id;
  return bio;
}

//----//
//Misc//
//----//

// TODO: Check if this is still needed with current version of Safari.
export function applySafariNavFix() {
  if (!browser) return;

  const prevPage = document.getElementsByClassName('prev');
  if (prevPage[0]) prevPage[0].classList.replace('prev', 'not-prev');
}
