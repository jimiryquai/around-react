import React from 'react';

function Card(props) {
	function handleCardClick() {
		props.onCardClick(props.card);
	}

	return (
		<li className="card">
			<button className="button button_trash" title="button that deletes image"></button>
			<img onClick={handleCardClick} src={props.card.link} alt={props.card.name} className="card__image" />
			<div className="card__content">
				<div className="card__content_place_left">
					<h3 className="card__title">{props.card.name}</h3>
				</div>
				<div className="card__content_place_right">
					<button className="button button_heart" title="button that likes image"></button>
					<p className="card__likes">{props.card.likes.length}</p>
				</div>
			</div>
		</li>
	);
}

export default Card;
