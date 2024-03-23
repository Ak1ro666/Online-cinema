import { getMyProfileUrl, getUsersUrl } from '@/shared/config/api.config';

import { IProfileInput } from '@/pages/profile/types/profile.interface'
import { ITableItem } from '@/shared/types/admin-table.types';
import { IUserEdit } from '@/pages/userEdit/types/user-edit.interface';
import { axiosClassic } from '@/shared/api/interceptors';

export const UserService = {
	async getAll() {
		return await axiosClassic.get<ITableItem[]>(getUsersUrl());
	},
	async getById(id: number) {
		return await axiosClassic.get<IUserEdit[]>(getUsersUrl(`?id=${id}`));
	},
	async getMyProfile(){
		return await axiosClassic.get<IProfileInput>(getMyProfileUrl())
	},
	async updateProfile(emailUser: string, data: IProfileInput){
		return await axiosClassic.patch<IProfileInput>(getUsersUrl(`?email=${emailUser}`), data)
	},
	async update(id: number, data: IUserEdit) {
		return await axiosClassic.patch(getUsersUrl(`/${id}`), data);
	},
	async delete(id: number) {
		return await axiosClassic.delete(getUsersUrl(`/${id}`));
	},
};
