import { IUser } from '@/entities/User/model/types/user.interface';

export interface IUserEdit extends IUser {
	isAdmin: boolean;
}
