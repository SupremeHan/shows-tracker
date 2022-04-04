import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setViewedShows, setFavoriteShow } from '../actions/shows.actions';

export function ShowCard(props) {
	const { id, name, img, show, viewed } = props;
	const dispatch = useDispatch();

	function markViewed() {
		dispatch(setViewedShows(show));
	}

	function markFavorite() {
		dispatch(setFavoriteShow(show));
	}
	return (
		<div key={id} className="show-card">
			<Link to={`/show/${id}`}>
				<img src={img} alt={name} />

				<div className="show-card__info">
					<h5>{name}</h5>
				</div>
			</Link>
			{viewed === true && (
				<div className="show-card__dropdown">
					<Dropdown drop="start">
						<Dropdown.Toggle variant="primary" id="dropdown-basic" size="sm" />

						<Dropdown.Menu>
							<Dropdown.Item onClick={() => markViewed()}>Viewed</Dropdown.Item>
							<Dropdown.Item onClick={() => markFavorite()}>Favorites</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			)}
		</div>
	);
}
