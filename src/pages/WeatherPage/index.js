import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentWeather, getUserWeatherLocation, setErr } from '../../actions/weatherActions';

import { accuweather } from '../../axios';
import CurrentWeatherCard from '../../components/CurrentWeatherCard';
import Loading from '../../components/Loading';
import { START_LOADING } from '../../constants';
import Popup from '../../components/Popup';

import { ReactComponent as Search } from '../../assets/search.svg';

import './index.scss';

const WeatherPage = () => {
	const dispatch = useDispatch();

	const { currentWeather, isLoading, err } = useSelector((state) => state.weather);
	const [searchInput, setSearchInput] = useState('');
	const [cities, setCities] = useState([]);
	const [popupDetails, setPopupDetails] = useState(null);
	const [searchErr, setSearchErr] = useState('');

	useEffect(() => {
		if (err) {
			setPopupDetails({ onClickOk: onClickPopupOkBtn, text: err });
		}
	}, [err]);

	useEffect(() => {
		if (searchErr) {
			setTimeout(() => {
				setSearchErr('');
			}, 1500);
		}
	}, [searchErr]);

	useEffect(() => {
		if (!currentWeather) {
			dispatch({ type: START_LOADING });
			navigator.geolocation.getCurrentPosition(
				function (position) {
					dispatch(getUserWeatherLocation(position));
				},
				function (error) {
					if (error.code === error.PERMISSION_DENIED) {
						const defaultTelAvivObj = {
							Key: '215854',
							LocalizedName: 'Tel Aviv',
							Country: 'Israel',
						};
						dispatch(getCurrentWeather(defaultTelAvivObj));
					}
				}
			);
		}
	}, []);

	useEffect(() => {
		if (searchInput.trim()) {
			const timer = setTimeout(async () => {
				autoCompleat();
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [searchInput]);

	const autoCompleat = async () => {
		try {
			const res = await accuweather('/locations/v1/cities/autocomplete', { params: { q: searchInput } });
			if (res.status === 200 && res?.data) {
				setCities(res.data);
			}
		} catch (err) {
			dispatch(setErr(err.message));
			console.log(`autoCompleat Err: ${err.message}`);
		}
	};

	const renderSuggestions = () => {
		return cities.map(
			(city, index) =>
				searchInput &&
				city.LocalizedName.toLocaleLowerCase().includes(searchInput) && (
					<div key={index} className="suggestion" onClick={() => onClickSuggestion(city)}>
						{city.LocalizedName}
					</div>
				)
		);
	};

	const onClickSuggestion = (city) => {
		dispatch(getCurrentWeather(city));
		setCities([]);
		setSearchInput(city.LocalizedName);
	};

	const onChangeSearchInput = (e) => {
		const { value } = e.target;
		// Only en letters
		const isValid = /^[a-zA-Z]+$/.test(value);
		if (!isValid) {
			setSearchErr('Only en letters allowed');
		}
		const newValue = value.replace(/[^A-Za-z]/gi, '');
		setSearchInput(newValue);
	};
	const onClickPopupOkBtn = () => {
		setPopupDetails(null);
		dispatch(setErr(''));
	};
	return (
		<div className="weather-wrapper center-page">
			{popupDetails ? <Popup text={popupDetails.text} onClickOk={onClickPopupOkBtn} /> : ''}
			{isLoading ? (
				<Loading />
			) : (
				<Fragment>
					<div className="input-wrapper column">
						{searchErr ? <div className="search-err">{searchErr}</div> : ''}
						<input
							value={searchInput}
							type="text"
							className="search-input"
							placeholder="Enter a city..."
							onChange={onChangeSearchInput}
						/>
						<Search className="search-icon" />
						<div className="suggestions-wrapper">{renderSuggestions()}</div>
					</div>
					{currentWeather ? <CurrentWeatherCard /> : ''}
				</Fragment>
			)}
		</div>
	);
};

export default WeatherPage;
