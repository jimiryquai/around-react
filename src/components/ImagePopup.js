import React from 'react';

function ImagePopup() {
	return (
		<div className="popup popup_type_image">
			<div className="popup__modal popup__modal_type_image">
				<button className="popup__close" title="button that closes form"></button>
				<figure className="popup__figure">
					<img src="" alt="" className="popup__image" />
					<figcaption className="popup__caption"></figcaption>
				</figure>
			</div>
		</div>
	);
}

export default ImagePopup;
