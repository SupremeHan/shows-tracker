import { authConstants } from '../constants/auth.constants';
import * as authService from '../services/auth.service';

export function login(username, password) {
	return async (dispatch) => {
		dispatch(loginRequest());

		let result = await authService.login(username, password);
		if(result === undefined) {
			dispatch(failure())
		}
		if (result.status === 200) {
			dispatch(loginSuccess(result.data));
		} 
		
	};

	function loginRequest() {
		return { type: authConstants.LOGIN_REQUEST };
	}
	function loginSuccess(result) {
		return { type: authConstants.LOGIN_SUCCESS, result };
	}
	function failure() {
		return { type: authConstants.LOGIN_FAILURE, };
	}
}

export function logout() {
	return { type: authConstants.LOGOUT_SUCCESS };
}
