import { IUser } from '@/entities/User/model/types/user.interface'

export interface IUserEdit extends Omit<IUser, 'id'> {
	isAdmin: boolean
}