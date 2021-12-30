import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
	return (
		<ul>
			{props.users.map((user) => (
				<UserItem
					key={user.id}
					id={user.id}
					name={user.name}
					username={user.username}
					email={user.email}
					hoursPerWeek={user.hoursPerWeek}
					status={user.status}
					roleId={user.roleId}
				/>
			))}
		</ul>
	);
};

export default UserList;
