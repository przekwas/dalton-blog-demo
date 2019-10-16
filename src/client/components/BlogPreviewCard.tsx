import * as React from 'react';
import { IBlog } from '../utils/interfaces';
import { Link } from 'react-router-dom';

const BlogPreviewCard: React.FC<BlogPreviewCardProps> = props => {
	return (
		<article className="col-md-7">
			<div className="card shadow my-2">
				<div className="card-header bg-primary text-white text-center">
					<h4>{props.blog.title}</h4>
				</div>
				<div className="card-body">
					<h5 className="card-title text-center">by {props.blog.name}</h5>
					<p className="card-text text-justify">{props.blog.content.substring(0, 250)} ...</p>
					<Link className="btn btn-info btn-block shadow mt-3 w-50 mx-auto" to={`/details/${props.blog.id}`}>
						Read Blog
					</Link>
				</div>
				<div className="card-footer border-secondary bg-transparent text-secondary text-center font-italic">written on {props.blog._created}</div>
			</div>
		</article>
	);
};

interface BlogPreviewCardProps {
	blog: IBlog;
}

export default BlogPreviewCard;
