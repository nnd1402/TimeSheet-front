import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='wrapper'>
				<ul>
					<li>
						<span>Copyright. VegaITSourcing All rights reserved</span>
					</li>
				</ul>
				<ul className='right'>
					<li>
						<Link to='index.html'>Terms of service</Link>
					</li>
					<li>
						<Link to='index.html' className='last'>
							Privacy policy
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
