import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = (query: string, values?: any) => {
	return new Promise((resolve, reject) => {
		pool.query(query, values, (err, results) => {
			if (err) {
				return reject(err);
			} else {
				return resolve(results);
			}
		});
	});
};

import blogs from './queries/blogs';
import blogtags from './queries/blogtags';
import tags from './queries/tags';

export default {
	blogs,
	tags,
	blogtags
};
