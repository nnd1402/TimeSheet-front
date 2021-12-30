import { useEffect, useState } from 'react';
import CreateNewSection from '../../components/Shared/CreateNewSection';
import LettersSection from '../../components/Shared/LettersSection';
import Pagination from '../../components/Shared/Pagination';
import ClientModal from './ClientModal';
import Backdrop from '../../components/Shared/Backdrop';
import ClientList from '../../components/Client/ClientList';
//import { fetchClients } from '../actions/ClientActions/fetchClients';

const Client = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [clients, setClients] = useState([]);

	useEffect(() => {
		fetchClients();
		setIsLoading(false);
	}, []);

	async function fetchClients() {
		const response = await fetch('http://localhost:5000/api/clients');
		const fetchedClients = await response.json(response);
		setClients(fetchedClients);
	}
	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<div className='wrapper'>
			<section className='content'>
				<h2>
					<i className='ico clients'></i>Clients
				</h2>
				<CreateNewSection
					text='Create new client'
					onOpenModal={() => setIsOpen(true)}
				/>
				<LettersSection />
				<div className='accordion-wrap clients'>
					<ClientList clients={clients} />
				</div>
				<Pagination />
				<ClientModal open={isOpen} onClose={() => setIsOpen(false)} />
				{isOpen && <Backdrop close={() => setIsOpen(false)} />}
			</section>
		</div>
	);
};

export default Client;
