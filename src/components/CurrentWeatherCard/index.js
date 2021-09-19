import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WeatherDailyCard from '../WeatherDailyCard';

import { toggleFavoriteWeather } from '../../actions/weatherActions';
import { renderDayName } from '../../utils/renderDayName';
import { renderDegree } from '../../utils/renderDegree';
import { renderWeatherIcon } from '../../utils/renderWeatherIcon';

import { ReactComponent as HeartIcon } from '../../assets/heart-icon.svg';

import './index.scss';

const CurrentWeatherCard = () => {
	const dispatch = useDispatch();

	const { currentWeather, fiveDayWeather, favoriteWeathers } = useSelector((state) => state.weather);

	const { isCelsius } = useSelector((state) => state.environment);
	const [favoritesWeatherKeys, setFavoritesWeatherKeys] = useState([]);

	useEffect(() => {
		if (favoriteWeathers) {
			const newFavoritesWeatherKeys = favoriteWeathers.map((weather) => weather.key);
			setFavoritesWeatherKeys(newFavoritesWeatherKeys);
		}
	}, [favoriteWeathers]);

	useEffect(() => {
		localStorage.setItem('favoriteWeathers', JSON.stringify(favoriteWeathers));
	}, [favoriteWeathers]);

	const onClickFavoriteIcon = () => {
		dispatch(toggleFavoriteWeather(currentWeather));
	};

	return (
		<div className="current-weather-card-wrapper center-page">
			<HeartIcon
				className={`heart-icon ${favoritesWeatherKeys.includes(currentWeather.key) ? 'marked' : ''}`}
				onClick={onClickFavoriteIcon}
			/>
			<div className="current-weather-row row">
				<div className="icon-wrapper row">{renderWeatherIcon(currentWeather.weatherIconNumber)}</div>
				<div className="current-weather-info column">
					<div className="day-name">{renderDayName(currentWeather.date)}</div>
					<div className="city-name bold">{currentWeather.cityName}</div>
					<div className="temperature">Temperature: {renderDegree(currentWeather.tempInCelsius, isCelsius)}</div>
					<div className="weather-text">{currentWeather.weatherText}</div>
				</div>
			</div>
			<div className="daily-forecasts-row row">
				{fiveDayWeather.map(
					(dailyForecast, index) => index !== 0 && <WeatherDailyCard dailyForecast={dailyForecast} key={index} />
				)}
			</div>
		</div>
	);
};

export default CurrentWeatherCard;
