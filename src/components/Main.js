import React, { useState } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';

function Main(props) {
	const [cards, setCards] = useState([]);
	const currentUser = React.useContext(CurrentUserContext);

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

	function handleCardDelete(ownCard) {
		// Send a request to the API to delete the card
		api.removeCard(ownCard._id)
			.then(() => {
				// Create a new array based on the existing one minus the deleted card
				const filteredCards = cards.filter((c) => c._id !== ownCard._id);
				// Update the state
				setCards(filteredCards);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<main className="main">
			<section className="profile">
				<div className="avatar">
					<img src={currentUser.avatar} alt={currentUser.name} className="avatar__img" id="avatar" />
					<button
						className="button button_avatar"
						title="button that launches avatar editing form"
						onClick={props.onEditAvatar}
					></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{currentUser.name}</h1>
					<button
						className="button button_edit"
						title="button that launches profile editing form"
						onClick={props.onEditProfile}
					></button>
					<p className="profile__job">{currentUser.about}</p>
				</div>
				<button
					className="button button_add"
					title="button that launches card adding form"
					onClick={props.onAddPlace}
				></button>
			</section>
			<section className="gallery">
				<ul className="cards">
					{cards.map((card, index) => (
						<Card
							key={index}
							card={card}
							onCardClick={props.onCardClick}
							onCardLike={handleCardLike}
							onCardDelete={handleCardDelete}
						/>
					))}
				</ul>
			</section>
		</main>
	);
}

export default Main;