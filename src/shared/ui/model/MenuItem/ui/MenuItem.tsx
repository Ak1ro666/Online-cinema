import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { IMenuItem } from '@/shared/ui/model/Menu/types/menu.interface';
import { MaterialIcon } from '@/shared/ui/ui/MaterialIcon';

import styles from '@/app/assets/styles/Menu.module.scss';

export const MenuItem: FC<IMenuItem> = ({ icon, title, link: linkItem }) => {
	const { asPath } = useRouter();
	const link = linkItem.includes('/') ? linkItem : `/genre/${linkItem}`;
	return (
		<li
			className={cn({
				[styles.active]: asPath === link,
			})}
		>
			<Link href={link}>
				<MaterialIcon name={icon} />
				<span>{title}</span>
			</Link>
		</li>
	);
};
