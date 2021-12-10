import { useState, useEffect } from 'react';

const ClientDetails = ({
	id,
	name,
	address,
	city,
	zipCode,
	countryId,
	onClose
}) => {
	const [countries, setCountries] = useState([]);

	const [data, setData] = useState({
		id: id,
		name: name,
		address: address,
		city: city,
		zipCode: zipCode,
		countryId: countryId
	});

	const updateClient = (e) => {
		e.preventDefault();

		try {
			fetch(`http://localhost:5000/api/clients/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			}).then((res) => {
				if (res.ok) {
					console.log('client updated');
					onClose();
				}
			});
		} catch (err) {
			console.log(err);
		}
	};

	function deleteClient() {
		fetch(`http://localhost:5000/api/clients/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		}).then(() => {
			onClose();
		});
	}

	useEffect(() => {
		fetchCountries();
	}, []);

	async function fetchCountries() {
		const response = await fetch('http://localhost:5000/api/countries');
		const fetchedCountries = await response.json(response);
		setCountries(fetchedCountries);
	}

	const countryOptions = countries.map((country) => (
		<option key={country.id} value={country.id}>
			{country.name}
		</option>
	));

	return (
		<form className='details'>
			<ul className='form'>
				<li>
					<label>Client name:</label>
					<input
						type='text'
						className='in-text'
						defaultValue={name}
						onChange={(e) => setData({ ...data, name: e.target.value })}
					/>
				</li>
				<li>
					<label>Zip/Postal code:</label>
					<input
						type='text'
						className='in-text'
						defaultValue={zipCode}
						onChange={(e) => setData({ ...data, zipCode: e.target.value })}
					/>
				</li>
			</ul>
			<ul className='form'>
				<li>
					<label>Address:</label>
					<input
						type='text'
						className='in-text'
						defaultValue={address}
						onChange={(e) => setData({ ...data, address: e.target.value })}
					/>
				</li>
				<li>
					<label>Country:</label>
					<select
						defaultValue={countryId}
						onChange={(e) => setData({ ...data, countryId: e.target.value })}
					>
						{countryOptions}
					</select>
				</li>
			</ul>
			<ul className='form last'>
				<li>
					<label>City:</label>
					<input
						type='text'
						className='in-text'
						defaultValue={city}
						onChange={(e) => setData({ ...data, city: e.target.value })}
					/>
				</li>
			</ul>
			<div className='buttons'>
				<div className='inner'>
					<button onClick={updateClient} className='btn green'>
						Save
					</button>
					<button onClick={deleteClient} className='btn red'>
						Delete
					</button>
				</div>
			</div>
		</form>
	);
};

export default ClientDetails;
