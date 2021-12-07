import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<nav>
				<ul className='menu'>
					<li>
						<a href='index.html' className='btn nav'>
							TimeSheet
						</a>
					</li>
					<li>
						<Link to='clients' className='btn nav active'>
							Clients
						</Link>
					</li>
					<li>
						<a href='projects.html' className='btn nav'>
							Projects
						</a>
					</li>
					<li>
						<a href='categories.html' className='btn nav'>
							Categories
						</a>
					</li>
					<li>
						<a href='team-members.html' className='btn nav'>
							Team members
						</a>
					</li>
					<li className='last'>
						<a href='reports.html' className='btn nav'>
							Reports
						</a>
					</li>
				</ul>
				<div className='mobile-menu'>
					<a href='javascript:;' className='menu-btn'>
						<i className='zmdi zmdi-menu'></i>
					</a>
					<ul>
						<li>
							<a href='javascript:;'>TimeSheet</a>
						</li>
						<li>
							<a href='javascript:;'>Clients</a>
						</li>
						<li>
							<a href='javascript:;'>Projects</a>
						</li>
						<li>
							<a href='javascript:;'>Categories</a>
						</li>
						<li>
							<a href='javascript:;'>Team members</a>
						</li>
						<li class='last'>
							<a href='javascript:;'>Reports</a>
						</li>
					</ul>
				</div>
				<span className='line'></span>
			</nav>
		</div>
	);
};

export default Navbar;
