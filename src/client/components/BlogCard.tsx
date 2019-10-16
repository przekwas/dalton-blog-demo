import * as React from 'react';
import { IBlog } from '../utils/interfaces';
import { Link } from 'react-router-dom';

const BlogCard: React.FC<BlogCardProps> = props => {
	return (
		<article className="col-md-12">
			<div className="card shadow my-2">
				<div className="card-header bg-primary text-white text-center">
					<h4>{props.blog.title}</h4>
				</div>
				<div className="card-body">
					<h5 className="card-title text-center">by {props.blog.name}</h5>
					<p className="card-text text-justify">
						{/* this magic will split long form blog posts into various paragraphs */}
						{props.blog.content.split('\n').map((pararaph, i) => (
							<span key={`paragraph-${i}`}>
								{pararaph}
								<br />
							</span>
						))}
					</p>
					<Link className="btn btn-secondary btn-block shadow mt-3 w-50 mx-auto" to="/">
						Go Back
					</Link>
				</div>
				<div className="card-footer border-secondary bg-transparent text-secondary text-center font-italic">written on {}</div>
			</div>
		</article>
	);
};

interface BlogCardProps {
	blog: IBlog;
}

export default BlogCard;
