import { FieldError, UseFormRegister } from 'react-hook-form';

export interface ISlugFieldProps {
	error?: FieldError;
	register: UseFormRegister<any>;
	generate: () => void;
}
