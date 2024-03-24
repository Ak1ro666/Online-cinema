import { IUser } from '@/features/User/model/types/user.interface'

export interface IUserEdit extends IUser {
	isAdmin: boolean
}