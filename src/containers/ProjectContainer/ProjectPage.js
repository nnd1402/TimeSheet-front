import { useState, useEffect } from 'react';
import CreateNewSection from '../../components/Shared/CreateNewSection';
import LettersSection from '../../components/Shared/LettersSection';
import Pagination from '../../components/Shared/Pagination';
import Backdrop from '../../components/Shared/Backdrop';
import ProjectList from '../../components/Project/ProjectList';
import ProjectModal from './ProjectModal';

const ProjectPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetchProjects();
	}, []);

	async function fetchProjects() {
		const response = await fetch('http://localhost:5000/api/projects');
		const fetchedProjects = await response.json(response);
		setProjects(fetchedProjects);
	}
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>Projects</h2>
				<CreateNewSection
					text='Create new project'
					onOpenModal={() => setIsOpen(true)}
				/>
				<LettersSection />
				<div className='accordion-wrap clients'>
					<ProjectList projects={projects} />
				</div>
				<Pagination />
				<ProjectModal open={isOpen} onClose={() => setIsOpen(false)} />
				{isOpen && <Backdrop close={() => setIsOpen(false)} />}
			</section>
		</div>
	);
};

export default ProjectPage;
