import Header from '../Utils/Header';
import Footer from '../Utils/Footer';
import Router from '../../router/Router';

const DefaultLayout = () => {
	return (
		<div className='container'>
			<Header />
			<Router />
			<Footer />
		</div>
	);
};

export default DefaultLayout;
