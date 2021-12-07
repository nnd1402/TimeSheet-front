import React from 'react';
import ClientList from './ClientList';
import CreateNewSection from '../Shared/CreateNewSection';
import LettersSection from '../Shared/LettersSection';
import Pagination from '../Shared/Pagination';

const Client = () => {
	return (
		<div>
			<h2>
				<i className='ico clients'></i>Clients
			</h2>
			<CreateNewSection text='Create new client' />
			<LettersSection />
			<div className='accordion-wrap clients'>
				<ClientList />
			</div>
			<Pagination />
		</div>
	);
};

export default Client;
