import { favoritesReducer } from '@/entities/Favorites';
import { userReducer } from '@/entities/User';
import { combineReducers } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

export const rootReducer = combineReducers({
	user: userReducer,
	favorites: favoritesReducer,
	toastr: toastrReducer,
});
