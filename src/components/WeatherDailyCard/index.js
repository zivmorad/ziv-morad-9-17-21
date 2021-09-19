import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../Loading';

import { getCurrentWeather, updateDailyWeather } from '../../actions/weatherActions';

import { renderDayName } from '../../utils/renderDayName';
import { renderWeatherIcon } from '../../utils/renderWeatherIcon';
import { renderDegree } from '../../utils/renderDegree';

import './index.scss';

const WeatherDailyCard = ({ dailyForecast, isFavoritePageDisplay = false }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { isCelsius } = useSelector((state) => state.environment);
	const { favoriteWeathers, isLoading } = useSelector((state) => state.weather);

	useEffect(() => {
		const currentDate = new Date();
		if (currentDate.getDay() !== new Date(dailyForecast.date).getDay() && isFavoritePageDisplay) {
			dispatch(updateDailyWeather(dailyForecast.key));
		}
	}, []);

	useEffect(() => {
		if (favoriteWeathers) {
			localStorage.setItem('favoriteWeathers', JSON.stringify(favoriteWeathers));
		}
	}, [favoriteWeathers]);

	const onClickFavoriteCard = () => {
		if (isFavoritePageDisplay) {
			history.push('/');
			dispatch(getCurrentWeather(dailyForecast));
		}
	};

	return (
		<div className="daily-card-wrapper center-page" onClick={onClickFavoriteCard}>
			{isLoading ? (
				<Loading />
			) : (
				<Fragment>
					<div className="daily-card-title bold">
						{isFavoritePageDisplay ? dailyForecast.cityName : renderDayName(dailyForecast.date)}
					</div>
					{renderWeatherIcon(dailyForecast.weatherIconNumber)}
					{isFavoritePageDisplay ? (
						<div className="temperature">{renderDegree(dailyForecast.tempInCelsius, isCelsius)}</div>
					) : (
						<div className="temperature">
							{renderDegree(dailyForecast.minimumTempInCelsius, isCelsius)} -{' '}
							{renderDegree(dailyForecast.maximumTempInCelsius, isCelsius)}
						</div>
					)}
				</Fragment>
			)}
		</div>
	);
};

export default WeatherDailyCard;
