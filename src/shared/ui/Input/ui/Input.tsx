import cn from 'classnames';
import { FC } from 'react';

import { IInput } from '../types/input.interface';

import styles from './Input.module.scss';

export const Input: FC<IInput> = props => {
	const { className, type, placeholder, value, onChange, ...rest } = props;

	return (
		<input
			className={cn(styles.input, className)}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			{...rest}
		/>
	);
};
