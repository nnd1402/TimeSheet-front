import { useState, useEffect } from 'react';

const ProjectModal = ({ open, onClose }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [clientId, setClientId] = useState('');
	const [userIds, setUserIds] = useState('');
	const [leadUserId, setLeadUserId] = useState('');

	const [users, setUsers] = useState([]);
	const [clients, setClients] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const project = { name, description, clientId, userIds, leadUserId };

		try {
			fetch('http://localhost:5000/api/projects', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(project)
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
		fetchUsers();
	}, []);

	async function fetchUsers() {
		const response = await fetch('http://localhost:5000/api/users');
		const fetchedUsers = await response.json(response);
		setUsers(fetchedUsers);
	}

	useEffect(() => {
		fetchClients();
	}, []);

	async function fetchClients() {
		const response = await fetch('http://localhost:5000/api/clients');
		const fetchedClients = await response.json(response);
		setClients(fetchedClients);
	}

	const userOptions = users.map((user) => (
		<option key={user.id} value={user.id}>
			{user.name}
		</option>
	));

	const clientOptions = clients.map((client) => (
		<option key={client.id} value={client.id}>
			{client.name}
		</option>
	));

	if (!open) return null;
	return (
		<div className='new-member-wrap'>
			<div id='new-member' className='new-member-inner'>
				<h2>Create new project</h2>
				<form className='form' onSubmit={handleSubmit}>
					<li>
						<label>Project name:</label>
						<input
							type='text'
							className='in-text'
							onChange={(e) => setName(e.target.value)}
						/>
					</li>
					<li>
						<label>Description:</label>
						<input
							type='text'
							className='in-text'
							onChange={(e) => setDescription(e.target.value)}
						/>
					</li>
					<li>
						<label>Customer:</label>
						<select onChange={(e) => setClientId(e.target.value)}>
							{clientOptions}
						</select>
					</li>
					<li>
						<label>Programmers:</label>
						<select onChange={(e) => setUserIds(e.target.value)}>
							{userOptions}
						</select>
					</li>
					<li>
						<label>Lead:</label>
						<select onChange={(e) => setLeadUserId(e.target.value)}>
							{userOptions}
						</select>
					</li>
					<div className='buttons'>
						<div className='inner'>
							<button className='btn green'>Save</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProjectModal;
