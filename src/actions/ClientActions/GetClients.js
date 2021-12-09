import { useState, useEffect } from 'react';
import ClientList from '../../components/Client/ClientList';

const GetClients = () => {
	const [loadedClients, setLoadedClients] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/clients')
			.then((res) => res.json())
			.then((data) => {
				setLoadedClients(data);
			});
	}, []);

	return (
		<div className='accordion-wrap clients'>
			<ClientList clients={loadedClients} />
		</div>
	);
};

export default GetClients;
