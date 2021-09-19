import store from '../store';

import { TOGGLE_DEGREES, TOGGLE_THEME_SUPPORT } from '../constants';

export const toggleDegrees = () => (dispatch) => {
	const { isCelsius } = store.getState().environment;
	const newIsCelsius = !isCelsius;
	dispatch({ type: TOGGLE_DEGREES, payload: { newIsCelsius } });
};

export const toggleThemeSupport = () => (dispatch) => {
	const { isLightThem } = store.getState().environment;
	const newIsLightThem = !isLightThem;
	dispatch({ type: TOGGLE_THEME_SUPPORT, payload: { newIsLightThem } });
};
