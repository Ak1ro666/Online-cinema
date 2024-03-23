import { IUser } from '@/entities/User/model/types/user.interface'

export interface IProfileProps { 
		
}

export interface IProfileInput extends Pick<IUser, 'email'> { 
	password: string
}