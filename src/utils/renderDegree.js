export const renderDegree = (degreeInCelsius, isCelsius) => {
	if (isCelsius) {
		return `${Math.floor(degreeInCelsius)}${'\u00B0'} C`;
	} else {
		return `${Math.floor((degreeInCelsius * 9) / 5 + 32)}${'\u00B0'} F`;
	}
};
