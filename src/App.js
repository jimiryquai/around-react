import './App.css';

function App() {
	return (
		<div className="page">
			<header className="header">
				<img src="<%=require('./images/logo-white.svg')%>" alt="logo" className="logo" />
			</header>

			<main className="main">
				{/* Profile Section */}
				<section className="profile">
					<div className="avatar">
						<img src="" alt="jacques cousteau" className="avatar__img" id="avatar" />
						<button className="button button_avatar"></button>
					</div>
					<div className="profile__info">
						<h1 className="profile__name">Jacques Cousteau</h1>
						<button
							className="button button_edit"
							title="button that launches profile editing form"
						></button>
						<p className="profile__job">Explorer</p>
					</div>
					<button className="button button_add" title="button that launches image adding form"></button>
				</section>
				{/* Cards Gallery Section */}
				<section className="gallery">
					<ul className="cards"></ul>
				</section>
			</main>

			<footer className="footer">
				<p className="footer__copyright">&copy; James Ryan 2021</p>
			</footer>

			{/* Popup to Edit User Info */}
			<div className="popup popup_type_edit">
				<div className="popup__modal popup__modal_type_form">
					<button className="popup__close popup__close_type_edit" title="button that closes form"></button>
					<h2 className="content-title">Edit profile</h2>
					<form className="form form_type_edit" novalidate>
						<fieldset className="form__set">
							<label className="form__label" for="name-input">
								<input
									type="text"
									className="form__input form__input_name"
									id="name-input"
									name="name-input"
									placeholder="Name"
									minlength="2"
									maxlength="40"
									pattern="[A-Za-z -]{2,}"
									aria-describedby="name-input-error"
									required
								/>
								<span className="form__input-error" id="name-input-error"></span>
							</label>
							<label className="form__label" for="job-input">
								<input
									type="text"
									className="form__input form__input_job"
									id="job-input"
									name="job-input"
									placeholder="About Me"
									minlength="2"
									maxlength="200"
									aria-describedby="job-input-error"
									required
								/>
								<span className="form__input-error" id="job-input-error"></span>
							</label>
							<button className="button button_submit" type="submit">
								Save
							</button>
						</fieldset>
					</form>
				</div>
			</div>
			{/* Popup to Edit User Avatar */}
			<div className="popup popup_type_edit-avatar">
				<div className="popup__modal popup__modal_type_form popup__modal_type_avatar">
					<button
						className="popup__close popup__close_type_edit-avatar"
						title="button that closes form"
					></button>
					<h2 className="content-title">Change User Avatar</h2>
					<form className="form form_type_edit-avatar" action="#" name="edit-avatar">
						<fieldset className="form__set">
							<label className="form__label" for="avatar-input">
								<input
									className="form__input form__input_avatar"
									name="avatar-input"
									id="avatar-input"
									type="url"
									placeholder="Image Link"
									aria-describedby="avatar-input-error"
									required
								/>
								<span className="form__input-error" id="avatar-input-error"></span>
							</label>
							<button className="button button_submit" type="submit">
								Save
							</button>
						</fieldset>
					</form>
				</div>
			</div>
			{/* Popup to Edit Add Card */}
			<div className="popup popup_type_add">
				<div className="popup__modal popup__modal_type_form">
					<button className="popup__close popup__close_type_add" title="button that closes form"></button>
					<h2 className="content-title">Add Place</h2>
					<form className="form form_type_add" novalidate>
						<fieldset className="form__set">
							<label className="form__label" for="title-input">
								<input
									type="text"
									className="form__input form__input_title"
									id="title-input"
									name="title-input"
									placeholder="Title"
									minlength="1"
									maxlength="30"
									aria-describedby="title-input-error"
									required
								/>
								<span className="form__input-error" id="title-input-error"></span>
							</label>
							<label className="form__label" for="url-input">
								<input
									type="url"
									className="form__input form__input_url"
									id="url-input"
									name="url-input"
									placeholder="Image Link"
									aria-describedby="url-input-error"
									required
								/>
								<span className="form__input-error" id="url-input-error"></span>
							</label>
							<button className="button button_submit" type="submit">
								Create
							</button>
						</fieldset>
					</form>
				</div>
			</div>
			{/* Popup to Delete Card */}
			<div className="popup popup_type_delete">
				<div className="popup__modal popup__modal_type_form popup__modal_type_delete">
					<button className="popup__close popup__close_type_delete" title="button that closes form"></button>
					<form className="form form_type_delete" action="#" novalidate>
						<h2 className="content__title">Are you sure?</h2>
						<button className="button button_submit" type="submit">
							Yes
						</button>
					</form>
				</div>
			</div>
			{/* Popup to Display Card Image */}
			<div className="popup popup_type_image">
				<div className="popup__modal popup__modal_type_image">
					<button className="popup__close popup__close_type_image" title="button that closes form"></button>
					<figure className="popup__figure">
						<img src="" alt="" className="popup__image" />
						<figcaption className="popup__caption"></figcaption>
					</figure>
				</div>
			</div>

			{/* Card Template */}
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
