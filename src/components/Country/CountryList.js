import React from 'react';
import CountryItem from './CountryItem';

const CountryList = (props) => {
	return (
		<div>
			<ul>
				{props.countries.map((country) => (
					<CountryItem key={country.id} id={country.id} name={country.name} />
				))}
			</ul>
		</div>
	);
};

export default CountryList;
