import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;
const apikey = process.env.REACT_APP_WEATHER_API_KEY;

console.log({ baseURL, apikey });
export const accuweather = axios.create({
	baseURL,
	params: {
		apikey,
	},
});
