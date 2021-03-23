import React from 'react';

function Main() {
	return (
		<main className="main">
			{/* Profile Section */}
			<section className="profile">
				<div className="avatar">
					<img src="" alt="jacques cousteau" className="avatar__img" id="avatar" />
					<button className="button button_avatar"></button>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">Jacques Cousteau</h1>
					<button className="button button_edit" title="button that launches profile editing form"></button>
					<p className="profile__job">Explorer</p>
				</div>
				<button className="button button_add" title="button that launches image adding form"></button>
			</section>
			{/* Cards Gallery Section */}
			<section className="gallery">
				<ul className="cards"></ul>
			</section>
		</main>
	);
}

export default Main;
