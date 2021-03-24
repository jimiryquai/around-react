import React from 'react';

function PopupWithForm(props) {
	return (
		<div className={`popup popup_type_${props.name}`}>
			<div className="popup__modal popup__modal_type_form">
				<button className="popup__close" title="button that closes form"></button>
				<h2 className="content-title">{props.title}</h2>
				<form className="form" name={props.name} noValidate>
					{props.children}
					<button className="button button_submit" type="submit" title="button that submits form">
						Save
					</button>
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;
