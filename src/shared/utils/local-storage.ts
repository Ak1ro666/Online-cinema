import { IAuthResponse } from '@/entities/User';
import { IToken } from '@/entities/User/model/types/user.interface';

export const getStoreLocal = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name);
		return ls ? JSON.parse(ls) : null;
	}

	return null;
};

export const saveTokenToStorage = (data: IToken) => {
	if (typeof localStorage !== undefined) {
		localStorage.setItem('ACTS', JSON.stringify(data.token));
	}
};

export const saveUserToStorage = (data: IAuthResponse) => {
	if (typeof localStorage !== undefined) {
		saveTokenToStorage(data);
		localStorage.setItem('user', JSON.stringify(data));
	}
};

export const removeTokenToStorage = () => {
	localStorage.removeItem('ACTS ');
};
