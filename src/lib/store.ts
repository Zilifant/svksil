// store

import type { AllContent, Theme, Animation } from '$lib/types';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const content: Writable<AllContent> = writable();
export const theme: Writable<Theme> = writable('dark');
export const animation: Writable<Animation> = writable('fade');
