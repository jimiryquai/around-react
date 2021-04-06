import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
	const [name, setName] = useState();
	const [description, setDescription] = useState();

	// Subscription to the context
	const currentUser = React.useContext(CurrentUserContext);

	// After loading the current user from the API
	// their data will be used in managed components.
	React.useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser]);

	// the input event handler changes the state
	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleDescriptionChange(e) {
		setDescription(e.target.value);
	}

	function handleSubmit(e) {
		// Prevent the browser from navigating to the form address
		e.preventDefault();

		// Pass the values of the managed components to the external handler
		props.onUpdateUser({
			name: name,
			about: description,
		});
	}

	return (
		<PopupWithForm
			name="profile"
			title="Edit profile"
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			<fieldset className="form__set">
				<label className="form__label" htmlFor="name-input">
					<input
						type="text"
						value={name}
						onChange={handleNameChange}
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
						value={description}
						onChange={handleDescriptionChange}
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
