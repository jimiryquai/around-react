import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
	return (
		<PopupWithForm name="new-place" title="New place" isOpen={props.isOpen} onClose={props.onClose}>
			<fieldset className="form__set">
				<label className="form__label" htmlFor="title-input">
					<input
						type="text"
						className="form__input form__input_title"
						id="title-input"
						name="title-input"
						placeholder="Title"
						required
						minLength="1"
						maxLength="30"
						aria-describedby="title-input-error"
					/>
					<span className="form__input-error" id="title-input-error"></span>
				</label>
				<label className="form__label" htmlFor="url-input">
					<input
						type="url"
						className="form__input form__input_url"
						id="url-input"
						name="url-input"
						placeholder="Image URL"
						required
						aria-describedby="url-input-error"
					/>
					<span className="form__input-error" id="url-input-error"></span>
				</label>
			</fieldset>
		</PopupWithForm>
	);
}

export default AddPlacePopup;
