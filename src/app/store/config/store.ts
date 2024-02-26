import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
	toastr: toastrReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
});
