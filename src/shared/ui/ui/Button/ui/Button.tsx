import cn from 'classnames';
import { FC } from 'react';

import { IButton } from '../types/button.interface';

import styles from './Button.module.scss';

export const Button: FC<IButton> = props => {
	const { className = '', disabled = false, type = 'submit', children, onClick, ...rest } = props;

	return (
		<button className={cn(styles.button, className)} disabled={disabled} type={type} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};
