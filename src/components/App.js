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
import RemovePlacePopup from './RemovePlacePopup';

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isSelectedCard, setIsSelectedCard] = useState(null);
	const [currentUser, setCurrentUser] = useState({});
	const [cards, setCards] = useState([]);
	const [isRemovePlacePopupOpen, setIsRemovePlacePopupOpen] = useState(false);
	const [deletedCard, setDeletedCard] = useState(null);

	React.useEffect(() => {
		api.getUserInfo()
			.then((myUserInfo) => {
				setCurrentUser(myUserInfo);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	React.useEffect(() => {
		api.getCardList()
			.then((cards) => {
				let cardList = [];
				cards.forEach((card) => {
					cardList.push(card);
				});
				setCards(cardList);
			})
			.catch((err) => console.log(err));
	}, []);

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
		window.addEventListener('keyup', handleEscClose);
	}

	function handleUpdateAvatar({ avatar }) {
		api.setUserAvatar({ avatar })
			.then((updatedAvatar) => {
				setCurrentUser(updatedAvatar);
				setIsEditAvatarPopupOpen(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
		window.addEventListener('keyup', handleEscClose);
	}

	function handleUpdateUser({ name, about }) {
		api.setUserInfo({ name, about })
			.then((updatedInfo) => {
				setCurrentUser(updatedInfo);
				setIsEditProfilePopupOpen(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
		window.addEventListener('keyup', handleEscClose);
	}

	function handleAddPlaceSubmit({ name, link }) {
		api.addCard({ name, link })
			.then((newCard) => {
				setCards([...cards, newCard]);
				setIsAddPlacePopupOpen(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleDeleteClick(card) {
		setDeletedCard(card);
		setIsRemovePlacePopupOpen(true);
		window.addEventListener('keyup', handleEscClose);
	}

	function handleCardLike(card) {
		// Check one more time if this card was already liked
		const isLiked = card.likes.some((i) => i._id === currentUser._id);
		// Send a request to the API to get the updated card data
		api.changeCardLikeStatus(card._id, !isLiked)
			.then((updatedCard) => {
				// Create a new array based on the existing one and put the updated card into it
				const mappedCards = cards.map((c) => (c._id === card._id ? updatedCard : c));
				// Update the state
				setCards(mappedCards);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleCardDelete(deletedCard) {
		// Send a request to the API to delete the card
		api.removeCard(deletedCard._id)
			.then(() => {
				// Create a new array based on the existing one minus the deleted card
				const filteredCards = cards.filter((c) => c._id !== deletedCard._id);
				// Update the state
				setCards(filteredCards);
				setIsRemovePlacePopupOpen(false);
			})
			.catch((err) => {
				console.log(err);
			});
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
		setIsRemovePlacePopupOpen(false);
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
					onCardLike={handleCardLike}
					onCardDelete={handleDeleteClick}
					cards={cards}
				/>
				<Footer />
				<PopupWithForm name="confirm delete" title="Are you sure?" isOpen={false} onClose={closeAllPopups} />
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>
				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>
				<RemovePlacePopup
					isOpen={isRemovePlacePopupOpen}
					onClose={closeAllPopups}
					onConfirmDelete={handleCardDelete}
					card={deletedCard}
				/>
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				<ImagePopup card={isSelectedCard} onClose={closeAllPopups} />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
