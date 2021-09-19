import { accuweather } from '../axios';

import store from '../store';

import { SET_ERR, CURRENT_WEATHER_FETCHED, START_LOADING, UPDATE_FAVORITES_WEATHER } from '../constants';

export const getCurrentWeather = (city) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const { Key, LocalizedName, Country } = city;
		const newKey = Key || city.key;
		let res = await accuweather(`/currentconditions/v1/${newKey}`);
		if (res.status === 200 && res.data.length) {
			const { WeatherIcon, WeatherText, Temperature, LocalObservationDateTime } = res.data[0];
			const newCurrentWeather = {
				key: newKey,
				cityName: LocalizedName || city.cityName,
				cityCountry: Country?.LocalizedName || city.cityCountry,
				weatherIconNumber: WeatherIcon || city.weatherIconNumber,
				weatherText: WeatherText || city.weatherText,
				tempInCelsius: Temperature?.Metric.Value || city.tempInCelsius,
				date: LocalObservationDateTime || city.date,
			};
			res = await accuweather(`/forecasts/v1/daily/5day/${newCurrentWeather.key}`, { params: { metric: true } });
			if (res.status === 200 && res.data && res.data.DailyForecasts.length) {
				const newFiveDayWeather = res.data.DailyForecasts.map((forecast) => {
					return {
						date: forecast.Date,
						weatherIconNumber: forecast.Day.Icon,
						minimumTempInCelsius: forecast.Temperature.Minimum.Value,
						maximumTempInCelsius: forecast.Temperature.Maximum.Value,
					};
				});
				dispatch({ type: CURRENT_WEATHER_FETCHED, payload: { newCurrentWeather, newFiveDayWeather } });
			}
		}
	} catch (err) {
		dispatch(setErr(err.message));
		console.log('actions/weather/getCurrentWeather.js Err: ', err.message);
	}
};

export const toggleFavoriteWeather = (currentWeather) => (dispatch) => {
	const { favoriteWeathers } = store.getState().weather;
	const { key } = currentWeather;
	let newFavoriteWeathers = [];
	const newFavoritesWeatherKeys = favoriteWeathers.map((weather) => weather.key);
	if (newFavoritesWeatherKeys.includes(key)) {
		newFavoriteWeathers = favoriteWeathers.filter((weather) => weather.key !== key);
	} else {
		newFavoriteWeathers = [...favoriteWeathers, currentWeather];
	}
	dispatch({ type: UPDATE_FAVORITES_WEATHER, payload: { newFavoriteWeathers } });
};

export const updateDailyWeather = (key) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const { favoriteWeathers } = store.getState().weather;
		const res = await accuweather(`/currentconditions/v1/${key}`);
		console.log('updateDailyWeather: ', { res });
		if (res.status === 200 && res.data.length) {
			const { LocalObservationDateTime, Temperature } = res.data[0];
			const index = favoriteWeathers.findIndex((weather) => weather.key === key);
			const newFavoriteItem = favoriteWeathers[index];
			newFavoriteItem.date = LocalObservationDateTime;
			newFavoriteItem.tempInCelsius = Temperature.Metric.Value;
			favoriteWeathers[index] = newFavoriteItem;
			dispatch({ type: UPDATE_FAVORITES_WEATHER, payload: { newFavoriteWeathers: favoriteWeathers } });
		}
	} catch (err) {
		dispatch(setErr(err.message));
		console.log('actions/updateDailyWeather.js Err: ', err.message);
	}
};

export const getUserWeatherLocation = (position) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });
		const { latitude, longitude } = position.coords;
		const res = await accuweather('/locations/v1/cities/geoposition/search', {
			params: {
				q: `${latitude},${longitude}`,
			},
		});
		if (res.status === 200 && res.data) {
			const userCurrentCity = res.data;
			dispatch(getCurrentWeather(userCurrentCity));
		}
	} catch (err) {
		dispatch(setErr(err.message));
		console.log('actions/getUserWeatherLocation.js Err: ', err.message);
	}
};

export const setErr = (err) => (dispatch) => {
	dispatch({ type: SET_ERR, payload: { err } });
};
