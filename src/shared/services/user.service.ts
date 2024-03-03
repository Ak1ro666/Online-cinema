import { axiosClassic } from '@/shared/api/interceptors';
import { getUsersUrl } from '@/shared/config/api.config';
import { ITableItem } from '@/shared/types/admin-table.types';

export const UserService = {
	async getAll() {
		return await axiosClassic.get<ITableItem[]>(getUsersUrl());
	},
	async deleteUser(id: number) {
		return await axiosClassic.delete(getUsersUrl() + `/${id}`);
	},
};
