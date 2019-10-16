import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { IBlog } from '../utils/interfaces';
import BlogCard from '../components/BlogCard';

const Details: React.FC<DetailsProps> = props => {
	const [blog, setBlog] = useState<IBlog>({
		id: 0,
		title: '',
		content: '',
		authorid: 0,
		name: '',
		_created: new Date()
	});

	useEffect(() => {
		(async () => {
			try {
				let r = await fetch(`/api/blogs/${props.match.params.id}`);
				let blog = await r.json();
				setBlog(blog);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<section className="row justify-content-center my-3">
			<BlogCard blog={blog} />
		</section>
	);
};

interface DetailsProps extends RouteComponentProps<{ id: string }> {}

export default Details;
