import { Link } from 'react-router-dom';

const CreateNewSection = ({ text, onOpenModal }) => {
	return (
		<div className='grey-box-wrap reports'>
			<Link
				to='#new-member'
				className='link new-member-popup'
				onClick={() => {
					onOpenModal();
				}}
			>
				{text}
			</Link>
			<div className='search-page'>
				<input type='search' name='search-clients' className='in-search' />
			</div>
		</div>
	);
};

export default CreateNewSection;
