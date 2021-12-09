import { useState } from 'react';
import ClientDetails from './ClientDetails';

const ClientItem = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='item'>
			<div className='heading' onClick={() => setIsOpen(!isOpen)}>
				<span>{props.name}</span>
			</div>
			{isOpen && (
				<ClientDetails
					id={props.id}
					name={props.name}
					address={props.address}
					city={props.city}
					zipCode={props.zipCode}
					countryId={props.countryId}
				/>
			)}
		</div>
	);
};

export default ClientItem;
