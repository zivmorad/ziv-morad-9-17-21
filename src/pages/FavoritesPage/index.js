import React from 'react';
import { useSelector } from 'react-redux';

import WeatherDailyCard from '../../components/WeatherDailyCard';

import './index.scss';

const FavoritesPage = () => {
	const { favoriteWeathers } = useSelector((state) => state.weather);
	return (
		<div className="favorites-wrapper center-page">
			<div className="title">Favorites Locations</div>
			<div className="favorites-list row">
				{favoriteWeathers.map((weather) => (
					<WeatherDailyCard dailyForecast={weather} key={weather.key} isFavoritePageDisplay={true} />
				))}
			</div>
		</div>
	);
};

export default FavoritesPage;
