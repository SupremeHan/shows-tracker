import React from 'react';
import { useSelector } from 'react-redux';
import { ShowCard } from '../../../components/ShowCard';

export default function Viewed() {
	const { viewedShows, viewedSeasons, viewedEpisodes } = useSelector((state) => state.showsReducer);
	const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

	return (
		<div className="viewed-page">
			{viewedShows.length > 0 && (
				<>
					<h3>Viewed shows</h3>
					<div className="viewed-page__shows">
						{viewedShows.map((show) => (
							<ShowCard id={show.id} name={show.name} img={`${baseImgUrl}${show.poster_path}`} viewed={false} />
						))}
					</div>
				</>
			)}

			{viewedSeasons.length > 0 && (
				<>
					<h3>Viewed seasons</h3>
					<div className="viewed-page__shows">
						{viewedSeasons.map((season) => (
							<ShowCard id={season.id} name={season.name} img={`${baseImgUrl}${season.poster_path}`} viewed={false} />
						))}
					</div>
				</>
			)}

			{viewedEpisodes.length > 0 && (
				<>
					<h3>Viewed episodes</h3>
					<div className="viewed-page__shows">
						{viewedEpisodes.map((episode) => (
							<ShowCard id={episode.id} name={episode.name} img={`${baseImgUrl}${episode.still_path}`} viewed={false} />
						))}
					</div>
				</>
			)}
		</div>
	);
}
