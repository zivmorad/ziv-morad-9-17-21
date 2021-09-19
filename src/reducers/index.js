import { combineReducers } from 'redux';

import environmentReducer from './environmentReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
	environment: environmentReducer,
	weather: weatherReducer,
});
