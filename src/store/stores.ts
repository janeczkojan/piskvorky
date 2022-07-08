import { writable, derived } from 'svelte/store';
import type { Field, Player, GameStatus, GameConfig } from '../types';
import { logStore } from '../utils/log';


export const players = writable<Player[]>([]);


export const activePlayer = writable<Player>(null);


export const gameStatus = writable<GameStatus>({
	started: false,
	finished: false
});


export const gameConfig = writable<GameConfig>({
	rows: 0,
	cols: 0
});


export const fields = writable<Field[][]>([]);


export const winningRow = writable<Field[]>([]);



// Remove in production
logStore('players', players);
logStore('activePlayer', activePlayer);
logStore('gameStatus', gameStatus);
logStore('gameConfig', gameConfig);
logStore('fields', fields);
logStore('winCombination', winningRow);