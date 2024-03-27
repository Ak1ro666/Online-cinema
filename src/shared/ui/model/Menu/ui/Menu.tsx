import { FC, useEffect, useState } from 'react';

import { MenuItem } from '@/shared/ui/model/MenuItem';

import { IMenu } from '../types/menu.interface';

import styles from '@/app/assets/styles/Menu.module.scss';
import { AuthItems } from '@/widgets/AuthItems';

export const Menu: FC<IMenu> = ({ title, items }) => {
	const [isRenderClient, setIsRenderClient] = useState<boolean>(true);

	useEffect(() => {
		isRenderClient && setIsRenderClient(false);
	}, []);

	if (isRenderClient) return;

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
