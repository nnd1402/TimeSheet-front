import { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const ProjectItem = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='item'>
			<div className='heading' onClick={() => setIsOpen(!isOpen)}>
				<span>{props.name}</span>
			</div>
			{isOpen && (
				<ProjectDetails
					id={props.id}
					name={props.name}
					description={props.description}
					clientId={props.clientId}
					userIds={props.userIds}
					leadUserId={props.leadUserId}
				/>
			)}
		</div>
	);
};

export default ProjectItem;
