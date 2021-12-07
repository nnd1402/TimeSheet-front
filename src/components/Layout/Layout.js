import { Routes, Route } from 'react-router';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Client from '../Client/Client';

const Layout = () => {
	return (
		<div className='container'>
			<header className='header'>
				<div className='top-bar'></div>
				<div className='wrapper'>
					<Header />
					<Navbar />
				</div>
			</header>
			<div className='wrapper'>
				<section className='content'>
					<Routes>
						<Route path='/clients' element={<Client />} />
					</Routes>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
