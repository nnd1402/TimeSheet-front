import { useState, useEffect } from 'react';

const TeamMemberModal = ({ open, onClose }) => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [hoursPerWeek, setHoursPerWeek] = useState('');
	const [status, setStatus] = useState('');
	const [roleId, setRoleId] = useState('');

	const [roles, setRoles] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { name, username, email, hoursPerWeek, status, roleId };

		try {
			fetch('http://localhost:5000/api/users', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(user)
			}).then((res) => {
				if (res.ok) {
					onClose();
				}
			});
		} catch (err) {
			console.log(err.res.data);
		}
	};

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

	if (!open) return null;
	return (
		<div class='new-member-wrap'>
			<div id='new-member' class='new-member-inner'>
				<h2>Create new team member</h2>
				<form class='form' onSubmit={handleSubmit}>
					<li>
						<label>Name:</label>
						<input
							type='text'
							class='in-text'
							onChange={(e) => setName(e.target.value)}
						/>
					</li>
					<li>
						<label>Hours per week:</label>
						<input
							type='text'
							class='in-text'
							onChange={(e) => setHoursPerWeek(e.target.value)}
						/>
					</li>
					<li>
						<label>Username:</label>
						<input
							type='text'
							class='in-text'
							onChange={(e) => setUsername(e.target.value)}
						/>
					</li>
					<li>
						<label>Email:</label>
						<input
							type='text'
							class='in-text'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</li>
					<li class='inline'>
						<label>Status:</label>
						<span class='radio'>
							<label htmlFor='inactive'>Inactive:</label>
							<input
								type='radio'
								value='0'
								name='status'
								id='inactive'
								onChange={(e) => setStatus(e.target.checked)}
							/>
						</span>
						<span class='radio'>
							<label htmlFor='active'>Active:</label>
							<input
								type='radio'
								value='1'
								name='status'
								id='active'
								onChange={(e) => setStatus(e.target.checked)}
							/>
						</span>
					</li>
					<li>
						<label>Select role:</label>
						<select onChange={(e) => setRoleId(e.target.value)}>
							{roleOptions}
						</select>
					</li>
					<div class='buttons'>
						<div class='inner'>
							<button class='btn green'>Invite team member</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TeamMemberModal;
