import { useState } from 'react';
import CreateNewSection from '../components/Shared/CreateNewSection';
import LettersSection from '../components/Shared/LettersSection';
import Pagination from '../components/Shared/Pagination';
import ClientModal from './ClientModal';
import Backdrop from '../components/Shared/Backdrop';
import GetClients from '../actions/ClientActions/GetClients';

const Client = () => {
	const [isOpen, setIsOpen] = useState(false);

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
				<GetClients />
				<Pagination />
				<ClientModal open={isOpen} onClose={() => setIsOpen(false)} />
				{isOpen && <Backdrop close={() => setIsOpen(false)} />}
			</section>
		</div>
	);
};

export default Client;
