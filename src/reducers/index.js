import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { showsReducer } from './shows.reducer';

const appReducer = combineReducers({
	authReducer,
	showsReducer
});

export default appReducer;
