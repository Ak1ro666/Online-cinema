import { Nullable } from '@/shared/types/nullable.types';

export interface IUserState {
	email: string;
	isAdmin: boolean;
}

export interface IToken {
	token: string;
}

export interface IInitialState {
	user: Nullable<IUserState>;
	isLoading: boolean;
}

export interface IUser {
	id: number;
	email: string;
}

export interface IEmailPassword {
	email: string;
	password: string;
}


export interface IAuthResponse extends IToken {
	data: IUser & {
		isAdmin: boolean;
	};
}
