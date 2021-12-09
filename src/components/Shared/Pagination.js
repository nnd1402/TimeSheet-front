import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
	return (
		<div className='pagination'>
			<ul>
				<li>
					<Link to='index.html'>1</Link>
				</li>
				<li>
					<Link to='index.html'>2</Link>
				</li>
				<li>
					<Link to='index.html'>3</Link>
				</li>
				<li className='last'>
					<Link to='index.html'>Next</Link>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
