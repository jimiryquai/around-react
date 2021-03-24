import '../index.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
	}

	return (
		<div className="page">
			<Header />
			<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
			/>
			<Footer />
			<PopupWithForm name="confirm delete" title="Are you sure?" isOpen={false} onClose={closeAllPopups} />
			<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
			<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
			<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
			<ImagePopup onClose={closeAllPopups} />

			<template className="card-template">
				<li className="card">
					<button className="button button_trash" title="button that deletes image"></button>
					<img src="" alt="" className="card__image" />
					<div className="card__content">
						<div className="card__content_place_left">
							<h3 className="card__title">#</h3>
						</div>
						<div className="card__content_place_right">
							<button className="button button_heart" title="button that likes image"></button>
							<p className="card__likes">0</p>
						</div>
					</div>
				</li>
			</template>
		</div>
	);
}

export default App;
