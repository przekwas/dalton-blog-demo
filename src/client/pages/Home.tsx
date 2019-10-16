import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlog } from '../utils/interfaces';
import BlogPreviewCard from '../components/BlogPreviewCard';

const Home: React.FC<HomeProps> = () => {
	const [blogs, setBlogs] = useState<IBlog[]>([]);

	useEffect(() => {
		(async () => {
			try {
				let r = await fetch('/api/blogs');
				let blogs = await r.json();
				setBlogs(blogs);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<section className="row justify-content-center my-3">
			{blogs.map(blog => (
				<BlogPreviewCard key={`blog-${blog.id}`} blog={blog} />
			))}
		</section>
	);
};

interface HomeProps {}

export default Home;
