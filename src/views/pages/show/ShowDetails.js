import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { setViewedSeason } from '../../../actions/shows.actions';
import { useDispatch } from 'react-redux';

export default function ShowDetails() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [showDetails, setShowDetails] = useState({});
	const baseImgUrl = 'https://image.tmdb.org/t/p/';
	const path = `${process.env.PUBLIC_URL}/images/image.png`;

	useEffect(() => {
		if (id) {
			const getShowDetails = async () => {
				const response = await axios({
					method: 'get',
					url: `https://api.themoviedb.org/3/tv/${id}?api_key=6c8c76ea056fd560e2e38074cd3e2400&language=en-US`
				});
				if (response.status === 200) {
					setShowDetails(response.data);
				}
			};
			getShowDetails();
		}
	}, [id]);

	function markViewed(season) {
		dispatch(setViewedSeason(season));
	}

	return (
		<>
			{showDetails ? (
				<div className="show-details">
					<div style={{ display: 'flex' }} className="show-details__landing">
						<img src={`${baseImgUrl}/w300/${showDetails.poster_path}`} alt={showDetails.name} />
						<div className="show-details__landing-info">
							<div>
								<h2>{showDetails.name}</h2>
								<h5>{showDetails.tagline}</h5>
							</div>
							<div className="show-details__overview">
								<h4>Overview</h4>
								<p>{showDetails.overview}</p>
							</div>
						</div>
					</div>

					<div className="show-details__seasons">
						<h4>Seasons</h4>
						{showDetails?.seasons?.map((season, key) => (
							<div className="show-details__seasons-container">
								<Link to={`/season/${showDetails.id}/${season.season_number}`}>
									{season.poster_path === null ? (
										<div className="show-details__img-placeholder">
											<img src={path} alt={season.name} />
										</div>
									) : (
										<img src={`${baseImgUrl}/w200/${season.poster_path}`} alt={season.name} />
									)}
								</Link>
								<div className="show-details__info">
									<div>
										<div className="show-details__row">
											<Link to={`/season/${showDetails.id}/${season.season_number}`}>
												<h3>{season.name}</h3>
											</Link>
											<Button variant="outline-primary" size="sm" onClick={() => markViewed(season)}>
												Mark as Viewed
											</Button>
										</div>
										<p>({season?.air_date?.substring(0, 4)})</p>
										<p>{season.episodes_count}</p>
									</div>
									{season.overview && (
										<div>
											<h5>Overview</h5>
											<p>{season.overview}</p>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<h1>Loading....</h1>
			)}
		</>
	);
}
