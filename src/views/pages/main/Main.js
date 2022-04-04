import React, { useEffect, useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchShows, getPopularShows } from '../../../actions/shows.actions';
import { ShowCard } from '../../../components/ShowCard';

export default function Main() {
	const dispatch = useDispatch();
	const [searchInput, setSearchInput] = useState('');
	const { shows } = useSelector((state) => state.showsReducer);
	const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

	useEffect(() => {
		if (searchInput.length === 0) {
			dispatch(getPopularShows());
		}
	}, [dispatch, searchInput]);

	function handleSubmit() {
		dispatch(searchShows(searchInput));
	}

	return (
		<div>
			<InputGroup className="mb-3 main-page__search-input">
				<FormControl type="text" placeholder="Search Tv Shows" name="search" onChange={(e) => setSearchInput(e.target.value)} />
				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Search
				</Button>
			</InputGroup>
			<div className="main-page__shows">
				{shows?.map((item) => (
					<ShowCard id={item.id} name={item.name} img={`${baseImgUrl}${item.poster_path}`} show={item} viewed={true} />
				))}
			</div>
		</div>
	);
}
