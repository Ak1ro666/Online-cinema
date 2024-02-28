import { combineReducers } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

import { userReducer } from '@/entities/User';

export const rootReducer = combineReducers({
	user: userReducer,
	toastr: toastrReducer,
});
