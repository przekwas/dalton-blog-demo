import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:id?', async (req, res) => {
	const id = req.params.id;
	if (id) {
		try {
			const [blog]: any = await db.blogs.one(id);
			res.json(blog);
		} catch (error) {
			console.log(error);
			res.status(500).json("Luke's code sucks, let him know!");
		}
	} else {
		try {
			const blogs = await db.blogs.all();
			res.json(blogs);
		} catch (error) {
			console.log(error);
			res.status(500).json("Luke's code sucks, let him know!");
		}
	}
});

router.post('/', async (req, res) => {
	try {
		const result: any = await db.blogs.insert(req.body.title, req.body.content, req.body.authorid);
		if (req.body.selectedTag === 0) {
			res.json({
				result,
				msg: 'Blog inserted'
			});
		} else {
			await db.blogtags.insert(result.insertId, req.body.selectedTag);
			res.json({
				result,
				msg: 'Blog and Blogtag inserted'
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

router.put('/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const result = await db.blogs.update(req.body.title, req.body.content, id);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

router.delete('/:id', async (req, res) => {
	const id = req.params.id;
	try {
		await db.blogtags.destroy(id);
		const result = await db.blogs.destroy(id);
		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json("Luke's code sucks, let him know!");
	}
});

export default router;
