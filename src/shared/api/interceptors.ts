import axios from 'axios';

import { API_URL } from '../config/api.config';

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// axiosClassic.interceptors.request.use(config => {
// config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
// return config;
// });
