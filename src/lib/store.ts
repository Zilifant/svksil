// store

import type { AllContent } from '$lib/types';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const content: Writable<AllContent> = writable();
export const isDarkMode: Writable<boolean> = writable();
