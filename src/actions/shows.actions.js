import { showsConstants } from '../constants/shows.constants';
import * as showsService from '../services/shows.service';

export function searchShows(query) {
	return async (dispatch) => {
		dispatch(searchShowsRequest());

		let result = await showsService.searchShows(query);

		if (result.status === 200) {
			dispatch(searchShowsSuccess(result.data.results));
		} else {
			dispatch(searchShowsFailure());
		}
	};

	function searchShowsRequest() {
		return { type: showsConstants.SEARCH_SHOWS_REQUEST };
	}

	function searchShowsSuccess(result) {
		return { type: showsConstants.SEARCH_SHOWS_SUCCESS, result };
	}

	function searchShowsFailure() {
		return { type: showsConstants.SEARCH_SHOWS_FAILURE };
	}
}

export function getPopularShows() {
	return async (dispatch) => {
		dispatch(getPopularShowsRequest());

		let result = await showsService.getPopularShows();

		if (result.status === 200) {
			dispatch(getPopularShowsSuccess(result.data.results));
		} else {
			dispatch(getPopularShowsFailure());
		}
	};

	function getPopularShowsRequest() {
		return { type: showsConstants.GET_POPULAR_SHOWS_REQUEST };
	}

	function getPopularShowsSuccess(result) {
		return { type: showsConstants.GET_POPULAR_SHOWS_SUCCESS, result };
	}

	function getPopularShowsFailure() {
		return { type: showsConstants.GET_POPULAR_SHOWS_FAILURE };
	}
}

export function setViewedShows(show) {
	return async (dispatch) => {
		dispatch(setViewedShowsSuccess(show));
	};

	function setViewedShowsSuccess(result) {
		return { type: showsConstants.SET_VIEWED_SHOW, result };
	}
}

export function setViewedSeason(show) {
	return async (dispatch) => {
		dispatch(setViewedSeasonSuccess(show));
	};

	function setViewedSeasonSuccess(result) {
		return { type: showsConstants.SET_VIEWED_SEASON, result };
	}
}

export function setViewedEpisode(show) {
	return async (dispatch) => {
		dispatch(setViewedEpisodeSuccess(show));
	};

	function setViewedEpisodeSuccess(result) {
		return { type: showsConstants.SET_VIEWED_EPISODE, result };
	}
}

export function setFavoriteShow(show) {
	return async (dispatch) => {
		dispatch(setFavoriteShowSuccess(show));
	};

	function setFavoriteShowSuccess(result) {
		return { type: showsConstants.SET_FAVORITE_SHOW, result };
	}
}
