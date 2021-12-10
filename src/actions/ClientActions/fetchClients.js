export async function fetchClients() {
	const response = await fetch('http://localhost:5000/api/clients');
	const fetchedClients = await response.json(response);
	//treba resiti
	//setClients(fetchedClients);
}
