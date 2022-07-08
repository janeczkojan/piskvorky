import * as stores from './stores';
import { DEFAULT_GAME_ROWS, DEFAULT_GAME_COLS, DEFAULT_PLAYERS } from '../config';
import { createEmptyGameMatrix} from '../utils/game';
import type { Field, Player } from 'src/types';
import { get } from 'svelte/store';


export const startGame = () => {
	stores.gameConfig.update((config) => ({
		...config,
		rows: DEFAULT_GAME_ROWS,
		cols: DEFAULT_GAME_COLS
	}));

	stores.fields.update(() => createEmptyGameMatrix(DEFAULT_GAME_ROWS, DEFAULT_GAME_COLS));

	stores.players.update(() => DEFAULT_PLAYERS);

	stores.activePlayer.update(() => DEFAULT_PLAYERS[0]);

	stores.gameStatus.update((status) => ({
		...status,
		started: true,
		finished: false
	}));
};


export const finishGame = () => {
	stores.gameStatus.update((status) => ({
		...status,
		started: true,
		finished: true
	}));
};


export const changeActivePlayer = () => {
	const activePlayer = get(stores.activePlayer);
	const players = get(stores.players);

	let index = players.findIndex((player) => player.id === activePlayer.id) + 1;

	if (index >= players.length) {
		index = 0;
	}

	stores.activePlayer.update(() => players[index]);
};


export const takeFieldByActivePlayer = (field: Field) => {
	const activePlayer = get(stores.activePlayer);
	const fields = get(stores.fields);

	if (!field.player) {
		field.player = activePlayer;
		fields[field.x][field.y] = field;
		stores.fields.update(() => fields);

		changeActivePlayer();
	}
};