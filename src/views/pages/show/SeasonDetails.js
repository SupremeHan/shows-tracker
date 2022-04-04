import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import { setViewedEpisode } from '../../../actions/shows.actions';
import { useDispatch } from 'react-redux';

export default function SeasonDetails() {
	const { id, number } = useParams();
	const [season, setSeason] = useState({});
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState(false);
	const baseImgUrl = 'https://image.tmdb.org/t/p/w300';
	const path = `${process.env.PUBLIC_URL}/images/place.jpg`;

	useEffect(() => {
		if (id && number) {
			const getSeasonDetails = async () => {
				const response = await axios({
					method: 'get',
					url: `https://api.themoviedb.org/3/tv/${id}/season/${number}?api_key=6c8c76ea056fd560e2e38074cd3e2400&language=en-US`
				});
				if (response.status === 200) {
					setSeason(response.data);
				} else {
					setErrorMessage(true);
				}
			};
			getSeasonDetails();
		}
	}, [id, number]);

	function markViewed(episode) {
		dispatch(setViewedEpisode(episode));
	}

	return (
		<>
			{season && errorMessage === false ? (
				<div className="season-detail-page">
					<div className="season-detail-page__landing">
						<img src={`${baseImgUrl}${season.poster_path}`} alt={season.name} />
						<div className="season-detail-page__landing-title">
							<h2>{season.name}</h2>
							<p>{season.overview}</p>
						</div>
					</div>
					{season.episodes?.map((episode) => (
						<div className="season-detail-page__episodes">
							{episode.still_path ? (
								<img src={`${baseImgUrl}${episode.still_path}`} alt={episode.name} />
							) : (
								<img src={path} alt={episode.name} style={{ width: '300px', height: '169px' }} />
							)}

							<div className="season-detail-page__episodes-info">
								<Button
									variant="outline-primary"
									size="sm"
									style={{ borderColor: '#772ce8', color: '#772ce8' }}
									onClick={() => markViewed(episode)}>
									Viewed
								</Button>

								<h3>{episode.name}</h3>
								<p>{episode.overview}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<h1>There is no info for that search</h1>
			)}
		</>
	);
}
