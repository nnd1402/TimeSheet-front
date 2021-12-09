import React from 'react';
import ClientItem from './ClientItem';

const ClientList = (props) => {
	return (
		<ul>
			{props.clients.map((client) => (
				<ClientItem
					key={client.id}
					id={client.id}
					name={client.name}
					address={client.address}
					city={client.city}
					zipCode={client.zipCode}
					countryId={client.countryId}
				/>
			))}
		</ul>
	);
};

export default ClientList;
