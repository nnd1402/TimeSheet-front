export async function fetchCountries() {
	const response = await fetch('http://localhost:5000/api/countries');
	const fetchedCountries = await response.json(response);
	//nop
	//this.setCountries(fetchedCountries);
}
