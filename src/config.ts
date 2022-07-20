import type { Player } from './types';


export const DEFAULT_PLAYERS: Player[] = [
	{ id: 1, symbol: 'x', textColor: 'white', backgroundColor: 'red' },
	{ id: 2, symbol: 'o', textColor: 'purple', backgroundColor: 'lightyellow' }
];


export const DEFAULT_GAME_ROWS = 25;
export const DEFAULT_GAME_COLS = 35;
