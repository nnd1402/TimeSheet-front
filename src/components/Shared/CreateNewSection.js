import { useState } from 'react';
import AddClientModal from '../Client/AddClientModal';
import Backdrop from './Backdrop';

const CreateNewSection = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	function openModalHandler() {
		setIsOpen(true);
	}

	function closeModalHandler() {
		setIsOpen(false);
	}
	return (
		<div className='grey-box-wrap reports'>
			<a
				href='#new-member'
				className='link new-member-popup'
				onClick={openModalHandler}
			>
				{props.text}
			</a>
			<div className='search-page'>
				<input type='search' name='search-clients' className='in-search' />
			</div>

			{isOpen && <AddClientModal />}
			{isOpen && <Backdrop onClick={closeModalHandler} />}
		</div>
	);
};

export default CreateNewSection;
