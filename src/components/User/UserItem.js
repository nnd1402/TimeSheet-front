import { useState } from 'react';
import UserDetails from './UserDetails';

const UserItem = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='item'>
			<div className='heading' onClick={() => setIsOpen(!isOpen)}>
				<span>{props.name}</span>
			</div>
			{isOpen && (
				<UserDetails
					id={props.id}
					name={props.name}
					username={props.address}
					email={props.city}
					hoursPerWeek={props.zipCode}
					status={props.countryId}
					roleId={props.roleId}
					onClose={() => setIsOpen(false)}
				/>
			)}
		</div>
	);
};

export default UserItem;
