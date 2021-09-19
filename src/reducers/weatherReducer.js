import { CURRENT_WEATHER_FETCHED, SET_ERR, START_LOADING, STOP_LOADING, UPDATE_FAVORITES_WEATHER } from '../constants';

const newFavoriteWeathers = JSON.parse(localStorage.getItem('favoriteWeathers'));

const initialState = {
	favoriteWeathers: newFavoriteWeathers ? newFavoriteWeathers : [],
	currentWeather: null,
	fiveDayWeather: [],
	err: '',
	isLoading: false,
};

const weatherReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CURRENT_WEATHER_FETCHED: {
			const { newCurrentWeather, newFiveDayWeather } = payload;
			return {
				...state,
				currentWeather: newCurrentWeather,
				fiveDayWeather: newFiveDayWeather,
				isLoading: false,
				err: '',
			};
		}
		case START_LOADING: {
			return { ...state, isLoading: true };
		}
		case STOP_LOADING: {
			return { ...state, isLoading: false };
		}
		case UPDATE_FAVORITES_WEATHER: {
			const { newFavoriteWeathers } = payload;
			return { ...state, favoriteWeathers: newFavoriteWeathers, isLoading: false };
		}
		case SET_ERR: {
			const { err } = payload;
			return { ...state, err, isLoading: false };
		}
		default:
			return { ...state };
	}
};

export default weatherReducer;
