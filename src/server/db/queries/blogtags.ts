import { Query } from '../index';

const tagsForBlog = (blogid: number) => Query(`CALL GetBlogTags(?)`, [blogid]);
const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?)', [[blogid, tagid]]);
const destroy = (blogid: number) => Query('DELETE FROM blogtags WHERE blogid = ?', [blogid]);

export default {
	tagsForBlog,
	insert,
	destroy
};
