import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = (props) => {
	return (
		<ul>
			{props.projects.map((project) => (
				<ProjectItem
					key={project.id}
					id={project.id}
					name={project.name}
					description={project.description}
					clientId={project.clientId}
					userIds={project.userIds}
					leadUserId={project.leadUserId}
				/>
			))}
		</ul>
	);
};

export default ProjectList;
