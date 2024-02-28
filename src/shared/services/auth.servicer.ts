import { axiosClassic } from '@/shared/api/interceptors';
import { getAuthUrl, getRegisterUrl } from '@/shared/config/api.config';
import { removeTokenToStorage, saveUserToStorage } from '@/shared/utils/local-storage';

import { IAuthResponse, IEmailPassword } from '@/entities/User/index';

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
		removeTokenToStorage();
		localStorage.removeItem('user');
	},
};
