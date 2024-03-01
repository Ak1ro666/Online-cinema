import axios from 'axios';

import { options } from '@/shared/api/api.helpers';
import { ACCESS_TOKEN } from '@/shared/config/auth.config';
import { getStoreLocal } from '@/shared/utils/local-storage';

export const axiosClassic = axios.create(options);

axiosClassic.interceptors.request.use(config => {
	const accessToken = getStoreLocal(ACCESS_TOKEN);
	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});
