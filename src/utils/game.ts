import type { Field } from '../types';


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
}
