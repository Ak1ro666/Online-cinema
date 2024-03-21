import { ITableItem } from '@/shared/types/admin-table.types';
import { IUserEdit } from '@/pages/userEdit/types/user-edit.interface';
import { axiosClassic } from '@/shared/api/interceptors';
import { getUsersUrl } from '@/shared/config/api.config';

export const UserService = {
	async getAll() {
		return await axiosClassic.get<ITableItem[]>(getUsersUrl());
	},
	async getById(id: number) {
		return await axiosClassic.get<IUserEdit[]>(getUsersUrl(`?id=${id}`));
	},
	async update(id: number, data: IUserEdit) {
		return await axiosClassic.patch(getUsersUrl(`/${id}`), data);
	},
	async delete(id: number) {
		return await axiosClassic.delete(getUsersUrl(`/${id}`));
	},
};
