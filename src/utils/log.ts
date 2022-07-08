import type { Writable, Readable } from 'svelte/store';


export const logStore = <T>(name: string, store: Writable<T> | Readable<T>) => {
	store.subscribe((value) => console.log(`Store ${name}:`, value));
};
