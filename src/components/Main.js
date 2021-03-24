import React from 'react';
import avatar from '../images/avatar.jpg';

function Main(props) {
	return (
		<main className="main">
			<section className="profile">
				<div className="avatar">
					<img src={avatar} alt="jacques cousteau" className="avatar__img" id="avatar" />
					<button
						className="button button_avatar"
						title="button that launches avatar editing form"
						onClick={props.onEditAvatar}
					></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">Jacques Cousteau</h1>
					<button
						className="button button_edit"
						title="button that launches profile editing form"
						onClick={props.onEditProfile}
					></button>
					<p className="profile__job">Explorer</p>
				</div>
				<button
					className="button button_add"
					title="button that launches image adding form"
					onClick={props.onAddPlace}
				></button>
			</section>
			<section className="gallery">
				<ul className="cards"></ul>
			</section>
		</main>
	);
}

export default Main;
