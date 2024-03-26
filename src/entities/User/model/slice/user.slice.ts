import { login, logout, register } from '@/entities/User/model/actions/user.actions';

import { IInitialState } from '@/entities/User/model/types/user.interface';
import { getStoreLocal } from '@/shared/utils/local-storage';
import { createSlice } from '@reduxjs/toolkit';

export const initialState: IInitialState = {
	user: getStoreLocal('user'),
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.data;
			})
			.addCase(register.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(login.pending, state => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.data;
			})
			.addCase(login.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(logout.pending, state => {
				state.isLoading = true;
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(logout.rejected, state => {
				state.isLoading = false;
				state.user = null;
			});
	},
});

export const { reducer } = userSlice;
