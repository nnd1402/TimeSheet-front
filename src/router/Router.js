import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientPage from '../containers/ClientContainer/ClientPage';
import ProjectPage from '../containers/ProjectContainer/ProjectPage';
import ReportsPage from '../containers/ReportsContainer/ReportsPage';
import TeamMembersPage from '../containers/TeamMembersContainer/TeamMembersPage';
import TimeSheetPage from '../containers/TimeSheetContainer/TimeSheetPage';

const ClientRouter = () => {
	return (
		<Routes>
			<Route path='/clients' element={<ClientPage />} />
			<Route path='/projects' element={<ProjectPage />} />
			<Route path='/team-members' element={<TeamMembersPage />} />
			<Route path='/timesheet' element={<TimeSheetPage />} />
			<Route path='/reports' element={<ReportsPage />} />
		</Routes>
	);
};

export default ClientRouter;
