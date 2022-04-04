import axios from 'axios';

export async function login(username, password) {
	try {
		const token = await getToken();
		const response = await axios({
			method: 'post',
			url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=6c8c76ea056fd560e2e38074cd3e2400',
			data: {
				username,
				password,
				request_token: token
			}
		});
		return {
			status: response.status,
			data: response.data
		};
	} catch (error) {
		console.log(error);
	}
}

export async function getToken() {
	try {
		const response = await axios({
			method: 'get',
			url: 'https://api.themoviedb.org/3/authentication/token/new?api_key=6c8c76ea056fd560e2e38074cd3e2400'
		});
		return response.data.request_token;
	} catch (error) {
		console.log(error);
	}
}
