// Utilities

import { pageIds } from '$lib/constants';
import { content } from '$lib/content-master.js';
import { browser } from '$app/environment';

//!!!
export function getLocalData() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => content);
}

//------------//
//Random Quote//
//------------//

export const randFrom: any = (arr = []) =>
  arr[Math.floor(Math.random() * arr.length)];

//----------------------------//
//Fly Direction on Page Switch//
//----------------------------//

export function setFlyDirection(fromPg: number, toPg: number) {
  // Create reference object from array of page ids.
  const pageOrderRef = pageIds.reduce((obj: any, val: string, idx) => {
    obj[val] = idx;
    return obj;
  }, {});

  // Use reference object to compare relative 'position' of pages to
  // determine fly direction.
  return pageOrderRef[fromPg] > pageOrderRef[toPg] ? 'flyRight' : 'flyLeft';
}

//---------------------//
//Identify Initial Page//
//---------------------//

// Check if URL includes a hash associated with a specific page.
// If so, return that page id,
// otherwise, return the first page in `pageIds` array
// (the default/landing page).
export function getInitialPageId() {
  console.log('browser', browser);
  if (!browser) return pageIds[0]; //!!!

  const targetPg = window.location.hash.substring(1);
  const isViablePg = pageIds.includes(targetPg);
  if (isViablePg) return targetPg;
  return pageIds[0];
}

//--------------------//
//Remove Preload Class//
//--------------------//

// Remove `preload` CSS class from all elements after 1 second.
// The `preload` class disables animations.
// TODO: Legacy code from vanilla site; check if needed,
// then remove or refactor.
export function removePreloadClass({ firstLoad = false }) {
  if (!browser) return; //!!!

  function remove() {
    setTimeout(() => {
      const targetNodes = document.querySelectorAll('.preload');
      for (let i = 0; i < targetNodes.length; i++) {
        targetNodes[i].classList.remove('preload');
      }
    }, 1000);
  }

  firstLoad ? document.addEventListener('DOMContentLoaded', remove) : remove();
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
