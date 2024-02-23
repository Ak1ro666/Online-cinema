import { AuthItems } from '@/shared/ui/AuthItem';
import { FC } from 'react';
import { IMenu } from '../types/menu.interface';
import { MenuItem } from '@/shared/ui/MenuItem';
import styles from '@/app/assets/styles/Menu.module.scss';

export const Menu: FC<IMenu> = ({ title, items }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.menu}>
				{items.map(item => (
					<MenuItem {...item} key={item.link} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	);
};
