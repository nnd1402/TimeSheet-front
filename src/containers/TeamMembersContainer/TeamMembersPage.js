import { useState, useEffect } from 'react';
import Backdrop from '../../components/Shared/Backdrop';
import CreateNewSection from '../../components/Shared/CreateNewSection';
import LettersSection from '../../components/Shared/LettersSection';
import Pagination from '../../components/Shared/Pagination';
import UserList from '../../components/User/UserList';
import TeamMemberModal from './TeamMemberModal';

const TeamMembersPage = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		const response = await fetch('http://localhost:5000/api/users');
		const fetchedUsers = await response.json(response);
		setUsers(fetchedUsers);
	}
	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>Team members</h2>
				<CreateNewSection
					text='Create new member'
					onOpenModal={() => setIsOpen(true)}
				/>
				<LettersSection />
				<div className='accordion-wrap clients'>
					<UserList users={users} />
				</div>
				<Pagination />
				<TeamMemberModal open={isOpen} onClose={() => setIsOpen(false)} />
				{isOpen && <Backdrop close={() => setIsOpen(false)} />}
			</section>
		</div>
	);
};

export default TeamMembersPage;
