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
