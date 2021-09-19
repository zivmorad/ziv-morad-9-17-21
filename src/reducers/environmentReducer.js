import { TOGGLE_THEME_SUPPORT, TOGGLE_DEGREES } from '../constants';

const initialState = {
	isCelsius: true,
	isLightThem: false,
};
const environmentReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case TOGGLE_DEGREES:
			const { newIsCelsius } = payload;
			return { ...state, isCelsius: newIsCelsius };
		case TOGGLE_THEME_SUPPORT:
			const { newIsLightThem } = payload;
			return { ...state, isLightThem: newIsLightThem };
		default:
			return { ...state };
	}
};

export default environmentReducer;
