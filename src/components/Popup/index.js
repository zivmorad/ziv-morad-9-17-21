import React from 'react';

import './index.scss';

const Popup = ({ text, onClickOk }) => {
	const onClickOkBtn = () => {
		onClickOk();
	};

	return (
		<div className="popup-wrapper row">
			<div className="popup-card column">
				<div className="popup-title bold">Warning</div>
				<div className="popup-text">{text}, please try again latter</div>
				<button className="popup-btn" onClick={onClickOkBtn}>
					OK
				</button>
			</div>
		</div>
	);
};
export default Popup;
