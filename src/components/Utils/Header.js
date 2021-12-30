import React from 'react';
import logo from '../../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header className='header'>
				<div className='top-bar'></div>
				<div className='wrapper'>
					<Link to='index.html' className='logo'>
						<img src={logo} alt='VegaITSourcing Timesheet' />
					</Link>
					<ul className='user right'>
						<li>
							<Link to='index.html'>Nenad</Link>
							<div className='invisible'></div>
							<div className='user-menu'>
								<ul>
									<li>
										<Link to='index.html' className='link'>
											Change password
										</Link>
									</li>
									<li>
										<Link to='index.html' className='link'>
											Settings
										</Link>
									</li>
									<li>
										<Link to='index.html' className='link'>
											Export all data
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className='last'>
							<Link to='index.html'>Logout</Link>
						</li>
					</ul>
					<nav>
						<ul className='menu'>
							<li>
								<NavLink to='timesheet' className='btn nav'>
									TimeSheet
								</NavLink>
							</li>
							<li>
								<NavLink to='clients' className='btn nav'>
									Clients
								</NavLink>
							</li>
							<li>
								<NavLink to='projects' className='btn nav'>
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink to='team-members' className='btn nav'>
									Team members
								</NavLink>
							</li>
							<li className='last'>
								<NavLink to='reports' className='btn nav'>
									Reports
								</NavLink>
							</li>
						</ul>
						<div className='mobile-menu'>
							<Link to='index.html' className='menu-btn'>
								<i className='zmdi zmdi-menu'></i>
							</Link>
							<ul>
								<li>
									<Link to='index.html'>TimeSheet</Link>
								</li>
								<li>
									<Link to='index.html'>Clients</Link>
								</li>
								<li>
									<Link to='index.html'>Projects</Link>
								</li>
								<li>
									<Link to='index.html'>Categories</Link>
								</li>
								<li>
									<Link to='index.html'>Team members</Link>
								</li>
								<li className='last'>
									<Link to='index.html'>Reports</Link>
								</li>
							</ul>
						</div>
						<span className='line'></span>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
