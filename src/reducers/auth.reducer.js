import { authConstants } from '../constants/auth.constants';

export function authReducer(state = {}, action = {}) {
	switch (action.type) {
		case authConstants.LOGIN_REQUEST:
			return {
				...state,
				loggedIn: false,
				loginFailed: false
			};
		case authConstants.LOGIN_SUCCESS:
			localStorage.setItem('user', JSON.stringify(action.result));
			return {
				...state,
				loggedIn: true
			};
		case authConstants.LOGIN_FAILURE:
			return {
				...state,
				loggedIn: false,
				loginFailed: true,
			};
		case authConstants.LOGOUT_SUCCESS: {
			localStorage.removeItem('user');
			return {
				...state,
				loggedIn: false
			};
		}
		default:
			return state;
	}
}
