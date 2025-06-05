import { writable } from 'svelte/store';

export const isModalOpen = writable(false);
export const gameName = writable<string>('');
export const gameTile = writable<string>('');
export const gameVersion = writable<string>('');