import { getStoreLocal, saveStoreLocal } from '@/shared/utils/local-storage';
import { IInitialState } from '../types/favorites.interface';
import { createSlice } from '@reduxjs/toolkit';
import { FAVORITES_TOKEN_LOCAL_STORAGE } from '@/shared/constants/constants';
import { IMovie } from '@/shared/types/movie.types';

const initialState: IInitialState = {
	favorites: getStoreLocal(FAVORITES_TOKEN_LOCAL_STORAGE) as IMovie[],
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addItemFavorites(state, { payload: newItemFavorite }) {
			state.favorites = state.favorites ? [...state.favorites, newItemFavorite] : [newItemFavorite];
			saveStoreLocal(FAVORITES_TOKEN_LOCAL_STORAGE, state.favorites);
		},
		removeItemFavorites(state, { payload: FavoriteId }) {
			state.favorites = state.favorites ? state.favorites.filter(favorite => favorite.id !== FavoriteId) : null;
			saveStoreLocal(FAVORITES_TOKEN_LOCAL_STORAGE, state.favorites);
		},
	},
});

export const { reducer } = favoritesSlice;

export const favoriteActions = favoritesSlice.actions;
