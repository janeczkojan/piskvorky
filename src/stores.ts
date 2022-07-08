import { writable } from 'svelte/store';
import { DEFAULT_PLAYERS } from './config';
import type { Field, Player } from './types';


export const players = writable<Player[]>(DEFAULT_PLAYERS);


export const fields = writable<Field[][]>([]);
