import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:blogid', async (req, res) => {
	const blogid = req.params.blogid;
	try {
		const [blogtags]: any = await db.blogtags.tagsForBlog(blogid);
		res.json(blogtags);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
