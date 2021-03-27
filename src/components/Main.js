import React, { useState } from 'react';
import api from '../utils/api';
import defaultAvatarPicture from '../utils/constants';
import Card from './Card';

function Main(props) {
	const [userName, setUserName] = React.useState('Jimmy Jump');
	const [userDescription, setUserDescription] = React.useState("I don't leave no witnesses!");
	const [userAvatar, setUserAvatar] = React.useState(defaultAvatarPicture);
	const [cards, setCards] = useState([]);

	React.useEffect(() => {
		api.getUserInfo()
			.then((user) => {
				setUserName(user.name);
				setUserDescription(user.about);
				setUserAvatar(user.avatar);
			})
			.catch((err) => console.log(err));

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

	return (
		<main className="main">
			<section className="profile">
				<div className="avatar">
					<img src={userAvatar} alt={userName} className="avatar__img" id="avatar" />
					<button
						className="button button_avatar"
						title="button that launches avatar editing form"
						onClick={props.onEditAvatar}
					></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{userName}</h1>
					<button
						className="button button_edit"
						title="button that launches profile editing form"
						onClick={props.onEditProfile}
					></button>
					<p className="profile__job">{userDescription}</p>
				</div>
				<button
					className="button button_add"
					title="button that launches image adding form"
					onClick={props.onAddPlace}
				></button>
			</section>
			<section className="gallery">
				<ul className="cards">
					{cards.map((card, index) => (
						<Card key={index} card={card} onCardClick={props.onCardClick} />
					))}
				</ul>
			</section>
		</main>
	);
}

export default Main;
