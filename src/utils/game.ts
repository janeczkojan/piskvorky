import { RowCheckDirection } from '../enums';
import type { Field, GetStartPositionFunction, UpdateXPositionFunction, UpdateYPositionFunction } from '../types';


export const createEmptyMatrix = <T>(rows: number, cols: number, value: T | null = null): T[][] => {
	const matrix: T[][] = [];

	for (let i = 0; i < rows; i++) {
		matrix.push([]);

		for (let j = 0; j < cols; j++) {
			matrix[i][j] = value;
		}
	}

	return matrix;
};


export const createEmptyGameMatrix = (rows: number, cols: number): Field[][] => {
	const matrix = createEmptyMatrix<string>(rows, cols, '');

	return matrix.map((row, rowIndex) => row.map((col, colIndex) => ({
		x: rowIndex,
		y: colIndex,
		player: null
	})));
};


export const getFieldsInRowOneDirection = (fields: Field[][], startField: Field, getStartPosition: GetStartPositionFunction, updateXPosition: UpdateXPositionFunction, updateYPosition: UpdateYPositionFunction): Field[] => {
	const row = [];

	let [ x, y ] = getStartPosition();

	while (x >= 0 && x < fields.length && y >= 0 && y < fields[x].length && fields[x][y]?.player?.id === startField.player.id) {
		row.push(fields[x][y]);
		x = updateXPosition(x);
		y = updateYPosition(y);
	}

	return row;
};


export const getFieldsInRowHorizontal = (fields: Field[][], startField: Field): Field[] => {
	const left = getFieldsInRowOneDirection(fields, startField, () => ([ startField.x, startField.y - 1 ]), (x) => x, (y) => y - 1);
	const right = getFieldsInRowOneDirection(fields, startField, () => ([ startField.x, startField.y + 1 ]), (x) => x, (y) => y + 1);

	return [ ...left, startField, ...right ];
};


export const getFieldsInRowVertical = (fields: Field[][], startField: Field): Field[] => {
	const left = getFieldsInRowOneDirection(fields, startField, () => ([ startField.x - 1, startField.y ]), (x) => x - 1, (y) => y);
	const right = getFieldsInRowOneDirection(fields, startField, () => ([ startField.x + 1, startField.y ]), (x) => x + 1, (y) => y);

	return [ ...left, startField, ...right ];
};


export const getFieldsInRowDiagonalLeft = (fields: Field[][], startField: Field): Field[] => {
	const left = getFieldsInRowOneDirection(fields, startField, () => ([ startField.x - 1, startField.y - 1 ]), (x) => x - 1, (y) => y - 1);
	const right = getFieldsInRowOneDirection(fields, startField, () => ([ startField.x + 1, startField.y + 1 ]), (x) => x + 1, (y) => y + 1);

	return [ ...left, startField, ...right ];
};


export const getFieldsInRowDiagonalRight = (fields: Field[][], startField: Field): Field[] => {
	const left = getFieldsInRowOneDirection(fields, startField, () => ([ startField.x + 1, startField.y - 1 ]), (x) => x + 1, (y) => y - 1);
	const right = getFieldsInRowOneDirection(fields, startField, () => ([ startField.x - 1, startField.y + 1 ]), (x) => x - 1, (y) => y + 1);

	return [ ...left, startField, ...right ];
};


export const getFieldsInRowByDirection = (fields: Field[][], startField: Field, direction: RowCheckDirection): Field[] => {
	const getFieldsFuntions = {
		[RowCheckDirection.Horizontal]: getFieldsInRowHorizontal,
		[RowCheckDirection.Vertical]: getFieldsInRowVertical,
		[RowCheckDirection.DiagonalLeft]: getFieldsInRowDiagonalLeft,
		[RowCheckDirection.DiagonalRight]: getFieldsInRowDiagonalRight
	};

	const getFields = getFieldsFuntions[direction];

	return getFields(fields, startField);
};


export const getLongestRowFromAllDirections = (fields: Field[][], startField: Field): Field[] => {
	const directions = [ RowCheckDirection.Horizontal, RowCheckDirection.Vertical, RowCheckDirection.DiagonalLeft, RowCheckDirection.DiagonalRight ];
	let row = [];

	for (let direction of directions) {
		const nextRow = getFieldsInRowByDirection(fields, startField, direction);

		if (nextRow.length > row.length) {
			row = nextRow;
		}
	}

	return row;
};
