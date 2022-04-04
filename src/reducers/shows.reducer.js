import { showsConstants } from '../constants/shows.constants';
import { compareTwoArrays } from '../utils';

export function showsReducer(
	state = {
		shows: [],
		viewedShows: [],
		viewedSeasons: [],
		viewedEpisodes: [],
		favorites: []
	},
	action = {}
) {
	switch (action.type) {
		case showsConstants.SEARCH_SHOWS_REQUEST:
			return {
				...state,
				showsLoaded: false,
				showsFailed: false
			};
		case showsConstants.SEARCH_SHOWS_SUCCESS:
			return {
				...state,
				showsLoaded: true,
				showsFailed: false,
				shows: action.result
			};
		case showsConstants.SEARCH_SHOWS_FAILURE:
			return {
				...state,
				showsLoaded: true,
				showsFailed: true
			};
		case showsConstants.GET_POPULAR_SHOWS_REQUEST:
			return {
				...state,
				showsLoaded: false,
				showsFailed: false
			};
		case showsConstants.GET_POPULAR_SHOWS_SUCCESS:
			return {
				...state,
				showsLoaded: true,
				showsFailed: false,
				shows: action.result
			};
		case showsConstants.GET_POPULAR_SHOWS_FAILURE:
			return {
				...state,
				showsLoaded: true,
				showsFailed: true
			};
		case showsConstants.SET_VIEWED_SHOW:
			const stateArr = [...state.viewedShows];
			const newArr = [action.result];
			const res = compareTwoArrays(stateArr, newArr);
			return {
				...state,
				viewedShowLoaded: true,
				viewedShows: res
			};
		case showsConstants.SET_VIEWED_SEASON:
			return {
				...state,
				viewedSeasonLoaded: true,
				viewedSeasons: compareTwoArrays([...state.viewedSeasons], [action.result])
			};
		case showsConstants.SET_VIEWED_EPISODE:
			return {
				...state,
				viewedEpisodeLoaded: true,
				viewedEpisodes: compareTwoArrays([...state.viewedEpisodes], [action.result])
			};
		case showsConstants.SET_FAVORITE_SHOW:
			return {
				...state,
				favoriteEpisodesLoaded: true,
				favorites: compareTwoArrays([...state.favorites], [action.result])
			};
		default:
			return state;
	}
}
