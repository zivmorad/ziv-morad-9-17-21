import { Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import FavoritesPage from '../pages/FavoritesPage';
import WeatherPage from '../pages/WeatherPage';

const Routes = () => {
	return (
		<div className="routes-wrapper">
			<Navbar />
			<Route exact path="/" component={WeatherPage} />
			<Route exact path="/favorites" component={FavoritesPage} />
		</div>
	);
};

export default Routes;
