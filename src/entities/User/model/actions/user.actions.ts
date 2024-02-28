import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '@/shared/services/auth.servicer';

import { IAuthResponse, IEmailPassword } from '@/entities/User/model/types/user.interface';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'user/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register({ email, password });
			toastr.success('Success', 'You have been successfully registered');
			return response;
		} catch (error) {
			toastr.error('Error request', 'Please try again later');
			return thunkApi.rejectWithValue(`Error >>> ${error}`);
		}
	},
);

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'user/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login({ email, password });
			toastr.success('Success', 'You have been successfully logined');
			return response;
		} catch (error) {
			toastr.error('Error request', 'Please try again later');
			return thunkApi.rejectWithValue(`Error >>> ${error}`);
		}
	},
);

export const logout = createAsyncThunk('user/logout', async () => {
	await AuthService.logout();
});
