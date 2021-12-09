import { useState, useEffect } from 'react';

const GetCountries = () => {
	const [loadedCountries, setLoadedCountries] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/countries')
			.then((res) => res.json())
			.then((data) => {
				setLoadedCountries(data);
			});
	}, []);

	const countryOptions = loadedCountries.map((country) => (
		<option key={country.id} value={country.id}>
			{country.name}
		</option>
	));

	return countryOptions;
};

export default GetCountries;
