import { IAuthResponse, IUser } from '@/entities/User/model/types/user.interface';

import { axiosClassic } from '@/shared/api/interceptors';
import { getUsersUrl } from '@/shared/config/api.config';

export const AdminService = {
	async getCountUsers() {
		const { data } = await axiosClassic.get<IAuthResponse[]>(getUsersUrl());
		return data.length;
	},
};
