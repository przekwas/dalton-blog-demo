import * as React from 'react';
import { RouteComponentProps } from 'react-router';

const Edit: React.FC<EditProps> = props => {
	return (
		<div>
			<h1>Edit Page {props.match.params.id}</h1>
		</div>
	);
};

interface EditProps extends RouteComponentProps<{ id: string }> {}

export default Edit;
