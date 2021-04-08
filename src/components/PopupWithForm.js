import React from 'react';

function PopupWithForm(props) {
	const isOpenClassName = props.isOpen ? 'popup_opened' : '';

	return (
		<div className={`popup popup_type_${props.name} ${isOpenClassName}`}>
			<div className={`popup__modal popup__modal_type_form popup__modal_type_${props.name}`}>
				<button className="popup__close" title="button that closes form" onClick={props.onClose}></button>
				<h2 className="content-title">{props.title}</h2>
				<form className="form" name={props.name} onSubmit={props.onSubmit} noValidate>
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
