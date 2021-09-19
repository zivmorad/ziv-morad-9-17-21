import sunny from '../assets/weatherIcons/Sunny.png';
import mostlySunny from '../assets/weatherIcons/Mostly-Sunny.png';
import partlySunny from '../assets/weatherIcons/Partly-Sunny.png';
import IntermittentClouds from '../assets/weatherIcons/Intermittent-Clouds.png';
import HazySunshine from '../assets/weatherIcons/Hazy-Sunshine.png';
import MostlyCloudy from '../assets/weatherIcons/Mostly-Cloudy.png';
import Cloudy from '../assets/weatherIcons/Cloudy.png';
import Dreary from '../assets/weatherIcons/Dreary.png';
import Fog from '../assets/weatherIcons/Fog.png';
import Showers from '../assets/weatherIcons/Showers.png';
import MostlyCloudyWShowers from '../assets/weatherIcons/Mostly-Cloudy-w-Showers.png';
import PartlySunnyWShowers from '../assets/weatherIcons/Partly-Sunny-w-Showers.png';
import TStorms from '../assets/weatherIcons/T-Storms.png';
import MostlyCloudyWTStorms from '../assets/weatherIcons/Mostly-Cloudy-w-T-Storms.png';
import PartlySunnyWTStorms from '../assets/weatherIcons/Partly-Sunny-w-T-Storms.png';
import Rain from '../assets/weatherIcons/Rain.png';
import Flurries from '../assets/weatherIcons/Flurries.png';
import MostlyCloudyWFlurries from '../assets/weatherIcons/Mostly-Cloudy-w-Flurries.png';
import PartlySunnyWFlurries from '../assets/weatherIcons/Partly-Sunny-w-Flurries.png';
import Snow from '../assets/weatherIcons/Snow.png';
import MostlyCloudyWSnow from '../assets/weatherIcons/Mostly-Cloudy-w-Snow.png';
import Ice from '../assets/weatherIcons/Ice.png';
import Sleet from '../assets/weatherIcons/Sleet.png';
import FreezingRain from '../assets/weatherIcons/Freezing-Rain.png';
import RainAndSnow from '../assets/weatherIcons/Rain-and-Snow.png';
import Hot from '../assets/weatherIcons/Hot.png';
import Cold from '../assets/weatherIcons/Cold.png';
import Windy from '../assets/weatherIcons/Windy.png';
import Clear from '../assets/weatherIcons/Clear.png';
import MostlyClear from '../assets/weatherIcons/Mostly-Clear.png';
import PartlyCloudy from '../assets/weatherIcons/Partly-Cloudy.png';
import IntermittentClouds2 from '../assets/weatherIcons/Intermittent-Clouds2.png';
import HazyMoonlight from '../assets/weatherIcons/Hazy-Moonlight.png';
import MostlyCloudy2 from '../assets/weatherIcons/Mostly-Cloudy2.png';
import PartlyCloudyWShowers from '../assets/weatherIcons/Partly-Cloudy-w-Showers.png';
import MostlyCloudyWShowers2 from '../assets/weatherIcons/Mostly-Cloudy-w-Showers2.png';
import PartlyCloudyWTStorms from '../assets/weatherIcons/Partly-Cloudy-w-T-Storms.png';
import MostlyCloudyWTStorms2 from '../assets/weatherIcons/Mostly-Cloudy-w-T-Storms2.png';
import MostlyCloudyWFlurries2 from '../assets/weatherIcons/Mostly-Cloudy-w-Flurries2.png';
import MostlyCloudyWSnow2 from '../assets/weatherIcons/Mostly-Cloudy-w-Snow2.png';

export const renderWeatherIcon = (iconNumber) => {
	switch (iconNumber) {
		case 1:
			return <img src={sunny} alt="weather-icon-err" className="weather-icon" />;
		case 2:
			return <img src={mostlySunny} alt="weather-icon-err" className="weather-icon" />;
		case 3:
			return <img src={partlySunny} alt="weather-icon-err" className="weather-icon" />;
		case 4:
			return <img src={IntermittentClouds} alt="weather-icon-err" className="weather-icon" />;
		case 5:
			return <img src={HazySunshine} alt="weather-icon-err" className="weather-icon" />;
		case 6:
			return <img src={MostlyCloudy} alt="weather-icon-err" className="weather-icon" />;
		case 7:
			return <img src={Cloudy} alt="weather-icon-err" className="weather-icon" />;
		case 8:
			return <img src={Dreary} alt="weather-icon-err" className="weather-icon" />;
		case 11:
			return <img src={Fog} alt="weather-icon-err" className="weather-icon" />;
		case 12:
			return <img src={Showers} alt="weather-icon-err" className="weather-icon" />;
		case 13:
			return <img src={MostlyCloudyWShowers} alt="weather-icon-err" className="weather-icon" />;
		case 14:
			return <img src={PartlySunnyWShowers} alt="weather-icon-err" className="weather-icon" />;
		case 15:
			return <img src={TStorms} alt="weather-icon-err" className="weather-icon" />;
		case 16:
			return <img src={MostlyCloudyWTStorms} alt="weather-icon-err" className="weather-icon" />;
		case 17:
			return <img src={PartlySunnyWTStorms} alt="weather-icon-err" className="weather-icon" />;
		case 18:
			return <img src={Rain} alt="weather-icon-err" className="weather-icon" />;
		case 19:
			return <img src={Flurries} alt="weather-icon-err" className="weather-icon" />;
		case 20:
			return <img src={MostlyCloudyWFlurries} alt="weather-icon-err" className="weather-icon" />;
		case 21:
			return <img src={PartlySunnyWFlurries} alt="weather-icon-err" className="weather-icon" />;
		case 22:
			return <img src={Snow} alt="weather-icon-err" className="weather-icon" />;
		case 23:
			return <img src={MostlyCloudyWSnow} alt="weather-icon-err" className="weather-icon" />;
		case 24:
			return <img src={Ice} alt="weather-icon-err" className="weather-icon" />;
		case 25:
			return <img src={Sleet} alt="weather-icon-err" className="weather-icon" />;
		case 26:
			return <img src={FreezingRain} alt="weather-icon-err" className="weather-icon" />;
		case 29:
			return <img src={RainAndSnow} alt="weather-icon-err" className="weather-icon" />;
		case 30:
			return <img src={Hot} alt="weather-icon-err" className="weather-icon" />;
		case 31:
			return <img src={Cold} alt="weather-icon-err" className="weather-icon" />;
		case 32:
			return <img src={Windy} alt="weather-icon-err" className="weather-icon" />;
		case 33:
			return <img src={Clear} alt="weather-icon-err" className="weather-icon" />;
		case 34:
			return <img src={MostlyClear} alt="weather-icon-err" className="weather-icon" />;
		case 35:
			return <img src={PartlyCloudy} alt="weather-icon-err" className="weather-icon" />;
		case 36:
			return <img src={IntermittentClouds2} alt="weather-icon-err" className="weather-icon" />;
		case 37:
			return <img src={HazyMoonlight} alt="weather-icon-err" className="weather-icon" />;
		case 38:
			return <img src={MostlyCloudy2} alt="weather-icon-err" className="weather-icon" />;
		case 39:
			return <img src={PartlyCloudyWShowers} alt="weather-icon-err" className="weather-icon" />;
		case 40:
			return <img src={MostlyCloudyWShowers2} alt="weather-icon-err" className="weather-icon" />;
		case 41:
			return <img src={PartlyCloudyWTStorms} alt="weather-icon-err" className="weather-icon" />;
		case 42:
			return <img src={MostlyCloudyWTStorms2} alt="weather-icon-err" className="weather-icon" />;
		case 43:
			return <img src={MostlyCloudyWFlurries2} alt="weather-icon-err" className="weather-icon" />;
		case 44:
			return <img src={MostlyCloudyWSnow2} alt="weather-icon-err" className="weather-icon" />;
		default:
			return <img src={sunny} alt="weather-icon-err" className="weather-icon" />;
	}
};
