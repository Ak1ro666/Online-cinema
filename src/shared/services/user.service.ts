import { getMyProfileUrl, getUsersUrl } from '@/shared/config/api.config';

import { IUser } from '@/entities/User/model/types/user.interface';
import { IUserEdit } from '@/pages/userEdit/types/user-edit.interface';
import { axiosClassic } from '@/shared/api/interceptors';
import { ITableItem } from '@/shared/types/admin-table.types';

export const UserService = {
	async getAll() {
		return await axiosClassic.get<ITableItem[]>(getUsersUrl());
	},
	async getById(id: number) {
		return await axiosClassic.get<IUserEdit[]>(getUsersUrl(`?id=${id}`));
	},
	async getMyProfile() {
		return await axiosClassic.get<IUserEdit>(getMyProfileUrl());
	},
	async updateProfile(emailUser: string, data: IUser) {
		return await axiosClassic.patch(getUsersUrl(`?email=${emailUser}`), data);
	},
	async update(id: number, data: IUserEdit) {
		return await axiosClassic.patch(getUsersUrl(`/${id}`), data);
	},
	async delete(id: number) {
		return await axiosClassic.delete(getUsersUrl(`/${id}`));
	},
};
