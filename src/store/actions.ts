import * as stores from './stores';
import { DEFAULT_GAME_ROWS, DEFAULT_GAME_COLS, DEFAULT_PLAYERS } from '../config';
import { createEmptyGameMatrix, getLongestRowFromAllDirections } from '../utils/game';
import type { Field } from 'src/types';
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

	stores.winningRow.update(() => ([]));

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


export const checkWinCombination = (startField: Field) => {
	const fields = get(stores.fields);
	const longestRow = getLongestRowFromAllDirections(fields, startField);

	if (longestRow.length >= 5) {
		stores.winningRow.update(() => longestRow);
	}
};


export const takeFieldByActivePlayer = (field: Field) => {
	const activePlayer = get(stores.activePlayer);
	const fields = get(stores.fields);
	const winningList = get(stores.winningRow);

	if (!field.player && winningList.length < 5) {
		field.player = activePlayer;
		fields[field.x][field.y] = field;
		stores.fields.update(() => fields);

		checkWinCombination(field);
		changeActivePlayer();
	}
};