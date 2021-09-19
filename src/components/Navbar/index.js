import React from 'react';

import NavLink from '../NavLink';

import './index.scss';

const Navbar = () => {
	return (
		<div className="navbar-wrapper">
			<div className="logo-wrapper row">Weather App</div>
			<div className="nav-links row">
				<NavLink text="Home" path="/" />
				<NavLink text="Favorites" path="/favorites" />
			</div>
		</div>
	);
};

export default Navbar;
