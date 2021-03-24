import React from 'react';
import avatar from '../images/avatar.jpg';

function Main() {
	function handleEditAvatarClick() {
		const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
		popupEditAvatar.classList.add('popup_opened');
	}

	function handleEditProfileClick() {
		const popupEditProfile = document.querySelector('.popup_type_edit');
		popupEditProfile.classList.add('popup_opened');
	}

	function handleAddPlaceClick() {
		const popupAddPlace = document.querySelector('.popup_type_add');
		popupAddPlace.classList.add('popup_opened');
	}

	return (
		<main className="main">
			{/* Profile Section */}
			<section className="profile">
				<div className="avatar">
					<img src={avatar} alt="jacques cousteau" className="avatar__img" id="avatar" />
					<button
						className="button button_avatar"
						title="button that launches avatar editing form"
						onClick={handleEditAvatarClick}
					></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">Jacques Cousteau</h1>
					<button
						className="button button_edit"
						title="button that launches profile editing form"
						onClick={handleEditProfileClick}
					></button>
					<p className="profile__job">Explorer</p>
				</div>
				<button
					className="button button_add"
					title="button that launches image adding form"
					onClick={handleAddPlaceClick}
				></button>
			</section>
			{/* Cards Gallery Section */}
			<section className="gallery">
				<ul className="cards"></ul>
			</section>
		</main>
	);
}

export default Main;
