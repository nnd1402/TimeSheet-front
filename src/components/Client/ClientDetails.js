import React, { useEffect } from 'react';
import GetCountries from '../../actions/CountryActions/GetCountries';

const ClientDetails = ({ id, name, address, city, zipCode, countryId }) => {
	// const updateClient = (e) => {
	// 	e.preventDefault();
	// 	const client = { id, name, address, city, zipCode, countryId };

	// 	try {
	// 		fetch(`http://localhost:5000/api/clients/${id}`, {
	// 			method: 'PUT',
	// 			headers: { 'Content-Type': 'application/json' },
	// 			body: JSON.stringify(client)
	// 		}).then((res) => {
	// 			if (res.ok) {
	// 				console.log('client updated');
	// 			}
	// 		});
	// 	} catch (err) {
	// 		console.log(err.res.data);
	// 	}
	// };

	function deleteClient() {
		const client = {
			id: id,
			name: name,
			address: address,
			city: city,
			zipCode: zipCode,
			countryId: countryId
		};
		fetch(`http://localhost:5000/api/clients/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		}).then((result) => {
			result.json().then((resp) => {
				console.warn(resp);
			});
		});
	}

	return (
		<div className='details'>
			<ul className='form'>
				<li>
					<label>Client name:</label>
					<input type='text' className='in-text' defaultValue={name} />
				</li>
				<li>
					<label>Zip/Postal code:</label>
					<input type='text' className='in-text' defaultValue={zipCode} />
				</li>
			</ul>
			<ul className='form'>
				<li>
					<label>Address:</label>
					<input type='text' className='in-text' defaultValue={address} />
				</li>
				<li>
					<label>Country:</label>
					<select>
						<GetCountries />
					</select>
				</li>
			</ul>
			<ul className='form last'>
				<li>
					<label>City:</label>
					<input type='text' className='in-text' defaultValue={city} />
				</li>
			</ul>
			<div className='buttons'>
				<div className='inner'>
					<button className='btn green'>Save</button>
					<button onClick={deleteClient} className='btn red'>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ClientDetails;
