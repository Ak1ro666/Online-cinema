import { FC } from 'react';
import { ISlugFieldProps } from '../types/slug.interface'
import { Input } from '@/shared/ui/ui/Input';
import styles from './SlugField.module.scss';

export const SlugField: FC<ISlugFieldProps> = ({ generate, register, error }) => {
	return (
		<div className="relative">
			<Input {...register('slug', { required: 'Slug is required' })} placeholder="Slug" error={error} />

			<div className={styles.badge} onClick={generate}>
				generate
			</div>
		</div>
	);
};
