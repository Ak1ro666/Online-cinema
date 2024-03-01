import { CreateAxiosDefaults } from 'axios';

import { API_URL } from '@/shared/config/api.config';

export const getContentType = () => ({
	'Content-Type': 'application/json',
});

export const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: getContentType(),
	withCredentials: true,
};
