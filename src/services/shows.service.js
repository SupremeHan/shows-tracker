import axios from 'axios';

export async function searchShows(query) {
	try {
		const response = await axios({
			method: 'get',
			url: `https://api.themoviedb.org/3/search/tv?api_key=6c8c76ea056fd560e2e38074cd3e2400&query=${query}&page=1`
		});
		return {
			status: response.status,
			data: response.data
		};
	} catch (error) {
		console.log(error);
	}
}

export async function getPopularShows() {
	try {
		const response = await axios({
			method: 'get',
			url: `https://api.themoviedb.org/3/trending/tv/day?api_key=6c8c76ea056fd560e2e38074cd3e2400`
		});
		return {
			status: response.status,
			data: response.data
		};
	} catch (error) {
		console.log(error);
	}
}
