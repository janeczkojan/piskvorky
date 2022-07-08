export type Player = {
	id: number;
	symbol: string;
	textColor?: string;
	backgroundColor?: string;
};


export type Field = {
	x: number;
	y: number;
	player?: Player;
};


export type GameStatus = {
	started: boolean;
	finished: boolean;
};


export type GameConfig = {
	rows: number;
	cols: number;
};
