import { IAuthResponse, IEmailPassword } from '@/entities/User/index';
import { getAuthUrl, getRegisterUrl } from '@/shared/config/api.config';
import { removeTokenToStorage, saveUserToStorage } from '@/shared/utils/local-storage';

import { axiosClassic } from '@/shared/api/interceptors';
import { useRouter } from 'next/router';
import { ACCESS_TOKEN } from '@/shared/config/auth.config'

export const AuthService = {
	async register(userData: IEmailPassword) {
		const { data } = await axiosClassic.post<IAuthResponse>(getRegisterUrl(), { ...userData, isAdmin: false });

		if (data.token) saveUserToStorage(data);
		return data;
	},
	async login(userData: IEmailPassword) {
		const { data } = await axiosClassic.post<IAuthResponse>(getAuthUrl(), { ...userData });

		if (data.token) saveUserToStorage(data);

		return data;
	},
	logout() {
		localStorage.removeItem('user');
		localStorage.removeItem(ACCESS_TOKEN);
	}
};
