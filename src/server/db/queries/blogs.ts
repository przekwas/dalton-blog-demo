import { Query } from '../index';

const all = () => Query(`SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid`);
const one = (blogid: number) => Query('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?', [blogid]);
const insert = (title: string, content: string, authorid: number) => Query('INSERT INTO blogs (title, content, authorid) VALUE (?)', [[title, content, authorid]]);
const update = (title: string, content: string, blogid: number) => Query('UPDATE blogs SET title = ?, content = ? WHERE id = ?', [title, content, blogid]);
const destroy = (blogid: number) => Query('DELETE FROM blogs WHERE id = ?', [blogid]);

export default {
	all,
	one,
	insert,
	update,
	destroy
};
