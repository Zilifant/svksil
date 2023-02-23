// constants

import type { Page } from '$lib/types';

export const version = '2.1.2';

export const dark = 'dark';
export const light = 'light';

// prettier-ignore
export const pages: Page[] = [
  { id: 'bio',     href: '/',        color: 'pink',   pos: 1 },
  { id: 'resume',  href: '/resume',  color: 'blue',   pos: 2 },
  { id: 'code',    href: '/code',    color: 'green',  pos: 3 },
  { id: 'design',  href: '/design',  color: 'purple', pos: 4 },
  { id: 'writing', href: '/writing', color: 'orange', pos: 5 },
];

export const bio = 'bio';
export const res = 'resume';
export const code = 'code';
export const desi = 'design';
export const writ = 'writing';

export const pageIds = [...pages.map((page) => page.id)];
