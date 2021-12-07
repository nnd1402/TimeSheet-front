import React from 'react';
import logo from '../../assets/img/logo.png';

const Header = () => {
	return (
		<>
			<a href='index.html' className='logo'>
				<img src={logo} alt='VegaITSourcing Timesheet' />
			</a>
			<ul className='user right'>
				<li>
					<a href='javascript:;'>Sladjana Miljanovic</a>
					<div className='invisible'></div>
					<div className='user-menu'>
						<ul>
							<li>
								<a href='javascript:;' className='link'>
									Change password
								</a>
							</li>
							<li>
								<a href='javascript:;' className='link'>
									Settings
								</a>
							</li>
							<li>
								<a href='javascript:;' className='link'>
									Export all data
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li className='last'>
					<a href='javascript:;'>Logout</a>
				</li>
			</ul>
		</>
	);
};

export default Header;
