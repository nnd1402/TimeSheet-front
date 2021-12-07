import { useState } from 'react';
import ClientDetails from './ClientDetails';

const ClientItem = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='item'>
			<div className='heading' onClick={toggle}>
				<span>Hardcoded client name</span>
				<i>+</i>
			</div>
			{isOpen && <ClientDetails />}
		</div>
	);
};

export default ClientItem;
