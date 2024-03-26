import { IAuthResponse } from '@/entities/User';
import { IToken } from '@/entities/User/model/types/user.interface';
import { ACCESS_TOKEN } from '@/shared/config/auth.config';
import { IS_CLIENT_LOCAL_STORAGE } from '@/shared/constants/constants';

export const getStoreLocal = (name: string) => {
	if (IS_CLIENT_LOCAL_STORAGE) {
		const ls = localStorage.getItem(name);
		return ls ? JSON.parse(ls) : null;
	}

	return null;
};

export const saveStoreLocal = (name: string, data: any) => {
	if (IS_CLIENT_LOCAL_STORAGE) {
		localStorage.setItem(name, JSON.stringify(data));
	}
};

export const saveTokenToStorage = (data: IToken) => {
	if (IS_CLIENT_LOCAL_STORAGE) {
		localStorage.setItem(ACCESS_TOKEN, JSON.stringify(data.token));
	}
};

export const saveUserToStorage = (data: IAuthResponse) => {
	if (IS_CLIENT_LOCAL_STORAGE) {
		saveTokenToStorage(data);
		localStorage.setItem('user', JSON.stringify(data.data));
	}
};

export const removeTokenToStorage = () => {
	localStorage.removeItem(ACCESS_TOKEN);
};
