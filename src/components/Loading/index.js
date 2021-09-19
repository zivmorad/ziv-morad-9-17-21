import React from 'react';

import loadingCloud from '../../assets/loadingCloud.gif';

import './index.scss';

const Loading = () => {
	return (
		<div className="loading-wrapper center-page">
			<img src={loadingCloud} alt="loading-err" className="loading-img" />
			<div className="loding-text">Loading...</div>
		</div>
	);
};

export default Loading;
