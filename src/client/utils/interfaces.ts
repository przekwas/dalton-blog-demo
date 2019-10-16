export interface IBlog {
	id: number;
	title: string;
	content: string;
	authorid: number;
	name: string;
	_created: Date;
}

export interface ITag {
	id: number;
	name: string;
	_created: Date;
}
