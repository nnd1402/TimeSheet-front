import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientPage from '../containers/ClientPage';

const ClientRouter = () => {
	return (
		<Routes>
			<Route path='/clients' element={<ClientPage />} />
		</Routes>
	);
};

export default ClientRouter;
