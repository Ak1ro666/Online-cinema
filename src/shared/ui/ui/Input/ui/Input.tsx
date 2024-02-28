import cn from 'classnames';
import { forwardRef } from 'react';

import { IInput } from '../types/input.interface';

import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
	const { error = '', type = 'text', style, placeholder = 'Enter', ...rest } = props;

	return (
		<div className={cn(styles.common, styles.field)} style={style}>
			<label>
				<span>{placeholder}</span>
				<input ref={ref} type={type} {...rest} />
			</label>
			{error && typeof error === 'string' && <div className={styles.error}>{error}</div>}

			{error && typeof error !== 'string' && 'message' in error && <div className={styles.error}>{error.message}</div>}

			{error && typeof error !== 'string' && !('message' in error) && (
				<div className={styles.error}>Some other error occurred</div>
			)}
		</div>
	);
});

Input.displayName = 'Input';
