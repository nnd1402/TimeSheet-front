import { useState, useEffect } from 'react';
import GetCountries from '../actions/CountryActions/GetCountries';

const ClientModal = ({ open, onClose }) => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [zipCode, setZipcode] = useState('');
	const [countryId, setCountryId] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const client = { name, address, city, zipCode, countryId };

		try {
			fetch('http://localhost:5000/api/clients', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(client)
			}).then((res) => {
				if (res.ok) {
					onClose();
				}
			});
		} catch (err) {
			console.log(err.res.data);
		}
	};

	if (!open) return null;
	return (
		<div className='new-member-wrap'>
			<div id='new-member' className='new-member-inner'>
				<h2>Create new client</h2>
				<form className='form' onSubmit={handleSubmit}>
					<li>
						<label>Client name:</label>
						<input
							type='text'
							className='in-text'
							onChange={(e) => setName(e.target.value)}
						/>
					</li>
					<li>
						<label>Address:</label>
						<input
							type='text'
							className='in-text'
							onChange={(e) => setAddress(e.target.value)}
						/>
					</li>
					<li>
						<label>City:</label>
						<input
							type='text'
							className='in-text'
							onChange={(e) => setCity(e.target.value)}
						/>
					</li>
					<li>
						<label>Zip/Postal code:</label>
						<input
							type='text'
							className='in-text'
							onChange={(e) => setZipcode(e.target.value)}
						/>
					</li>
					<li>
						<label>Select countries:</label>
						<select onChange={(e) => setCountryId(e.target.value)}>
							<GetCountries />
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

export default ClientModal;
