import { useState, useEffect } from 'react';

const UserDetails = ({
	id,
	name,
	username,
	email,
	hoursPerWeek,
	status,
	roleId,
	onClose
}) => {
	const [roles, setRoles] = useState([]);

	const [data, setData] = useState({
		id: id,
		name: name,
		username: username,
		email: email,
		hoursPerWeek: hoursPerWeek,
		status: status,
		roleId: roleId
	});

	function deleteUser() {
		fetch(`http://localhost:5000/api/users/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		}).then(() => {
			onClose();
		});
	}

	useEffect(() => {
		fetchRoles();
	}, []);

	async function fetchRoles() {
		const response = await fetch('http://localhost:5000/api/roles');
		const fetchedRoles = await response.json(response);
		setRoles(fetchedRoles);
	}

	const roleOptions = roles.map((role) => (
		<option key={role.id} value={role.id}>
			{role.name}
		</option>
	));

	return (
		<div class='details'>
			<ul class='form'>
				<li>
					<label>Name:</label>
					<input type='text' class='in-text' />
				</li>
				<li>
					<label>Hours per week:</label>
					<input type='text' class='in-text' />
				</li>
			</ul>
			<ul class='form'>
				<li>
					<label>Username:</label>
					<input type='text' class='in-text' />
				</li>
				<li>
					<label>Email:</label>
					<input type='text' class='in-text' />
				</li>
			</ul>
			<ul class='form last'>
				<li>
					<label>Status:</label>
					<span class='radio'>
						<label for='inactive'>Inactive:</label>
						<input type='radio' value='1' name='status' id='inactive' />
					</span>
					<span class='radio'>
						<label for='active'>Active:</label>
						<input type='radio' value='2' name='status' id='active' />
					</span>
				</li>
				<li>
					<label>Role:</label>
					<select
						defaultValue={roleId}
						onChange={(e) => setData({ ...data, roleId: e.target.value })}
					>
						{roleOptions}
					</select>
				</li>
			</ul>
			<div class='buttons'>
				<div class='inner'>
					<button class='btn green'>Save</button>
					<button class='btn red' onClick={deleteUser}>
						Delete
					</button>
					<button class='btn orange'>Reset Password</button>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
