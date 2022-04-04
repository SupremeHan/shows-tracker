import React from 'react';
import { useSelector } from 'react-redux';
import { ShowCard } from '../../../components/ShowCard';

export default function Favorites() {
	const { favorites } = useSelector((state) => state.showsReducer);
	const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

	return (
		<div className="viewed-page">
			<h3>Favorite shows</h3>
			<div className="viewed-page__shows">
				{
				favorites?.length > 0 && favorites.map((show) => <ShowCard id={show.id} name={show.name} img={`${baseImgUrl}${show.poster_path}`} />)
				}
			</div>
		</div>
	)
}
