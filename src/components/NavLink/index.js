import React from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

import './index.scss';

const NavLink = ({ text, path }) => {
	const history = useHistory();
	const location = useLocation();

	const onClickLink = () => {
		history.push(path);
	};

	return (
		<div className={`nav-link ${location.pathname === path ? 'active' : ''}`} onClick={() => onClickLink()}>
			{text}
		</div>
	);
};

export default NavLink;
