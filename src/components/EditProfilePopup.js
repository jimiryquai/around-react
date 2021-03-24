import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
	return (
		<PopupWithForm name="profile" title="Edit profile" isOpen={props.isOpen} onClose={props.onClose}>
			<fieldset className="form__set">
				<label className="form__label" htmlFor="name-input">
					<input
						type="text"
						className="form__input form__input_name"
						id="name-input"
						name="name-input"
						placeholder="Name"
						required
						minLength="2"
						maxLength="40"
						pattern="[A-Za-z -]{2,}"
						aria-describedby="name-input-error"
					/>
					<span className="form__input-error" id="name-input-error"></span>
				</label>
				<label className="form__label" htmlFor="job-input">
					<input
						type="text"
						className="form__input form__input_job"
						id="job-input"
						name="job-input"
						placeholder="About Me"
						required
						minLength="2"
						maxLength="200"
						aria-describedby="job-input-error"
					/>
					<span className="form__input-error" id="job-input-error"></span>
				</label>
			</fieldset>
		</PopupWithForm>
	);
}

export default EditProfilePopup;
