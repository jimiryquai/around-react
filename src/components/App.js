import '../index.css';
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isSelectedCard, setIsSelectedCard] = useState(null);
	const [currentUser, setCurrentUser] = useState({});

	React.useEffect(() => {
		api.getUserInfo()
			.then((myUserInfo) => {
				setCurrentUser(myUserInfo);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
		window.addEventListener('keyup', handleEscClose);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
		window.addEventListener('keyup', handleEscClose);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
		window.addEventListener('keyup', handleEscClose);
	}

	function handleCardClick(card) {
		setIsSelectedCard(card);
		window.addEventListener('keyup', handleEscClose);
	}

	function handleEscClose(e) {
		if (e.key === 'Escape') {
			closeAllPopups();
		}
	}

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsSelectedCard(null);
		window.removeEventListener('keyup', handleEscClose);
	}

	return (
		<div className="page">
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
				/>
				<Footer />
				<PopupWithForm name="confirm delete" title="Are you sure?" isOpen={false} onClose={closeAllPopups} />
				<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
				<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
				<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
				<ImagePopup card={isSelectedCard} onClose={closeAllPopups} />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
