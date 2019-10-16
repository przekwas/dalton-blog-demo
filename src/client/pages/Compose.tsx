import * as React from 'react';
import { useState, useEffect } from 'react';
import { ITag } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = props => {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [selectedTag, setSelectedTag] = useState<string>('1');
	const [tags, setTags] = useState<ITag[]>([]);

	useEffect(() => {
		(async () => {
			try {
				let r = await fetch('/api/tags');
				let tags = await r.json();
				setTags(tags);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		try {
			let r = await fetch('/api/blogs', {
				method: 'POST',
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify({
					title,
					content,
					selectedTag,
					authorid: 1
				})
			});
			//because my response has .result property
			//and because my result property has a .insertId
			//i can use it to auto navifate to this new blog's details!
			let msg: any = await r.json();
			props.history.push(`/details/${msg.result.insertId}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="row justify-content-center my-3">
			<article className="col-md-9">
				<form className="form-group p-4 shadow">
					<label>Title</label>
					<input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} placeholder="Blog title ..." type="text" className="form-control p-1 my-1 shadow-sm" />
					<label>Tags</label>
					<select value={selectedTag} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTag(e.target.value)} className="form-control p-1 my-1 shadow-sm">
						{tags.map(tag => (
							<option key={`tag-${tag.id}`} value={tag.id}>
								{tag.name}
							</option>
						))}
					</select>
					<label>Content</label>
					<textarea value={content} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} placeholder="Blog contents ..." className="form-control p-1 my-1 shadow-sm" rows={15} />
					<button onClick={handleSubmit} className="btn btn-primary btn-block mt-3 shadow w-75 mx-auto">
						Write Yo' Blog!
					</button>
				</form>
			</article>
		</section>
	);
};

interface ComposeProps extends RouteComponentProps {}

export default Compose;
