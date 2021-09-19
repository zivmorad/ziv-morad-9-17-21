import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleThemeSupport, toggleDegrees } from './actions/environmentActions';

import Routes from './routes';

import { ReactComponent as Sun } from './assets/sun.svg';
import { ReactComponent as Moon } from './assets/moon.svg';

import './App.scss';

const App = () => {
	const dispatch = useDispatch();

	const { isCelsius, isLightThem } = useSelector((state) => state.environment);

	const onClickDegreeBtn = () => {
		dispatch(toggleDegrees());
	};

	const onClickThemeSupport = () => {
		dispatch(toggleThemeSupport());
	};

	return (
		<div className={`app ${isLightThem ? 'dark' : ''}`}>
			<div className="btns-wrapper">
				<div className="btn bold row" onClick={onClickDegreeBtn}>
					{isCelsius ? `F${'\u00B0'}` : `C${'\u00B0'}`}
				</div>
				<div className="btn row" onClick={onClickThemeSupport}>
					{isLightThem ? <Sun /> : <Moon />}
				</div>
			</div>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);
};

export default App;
