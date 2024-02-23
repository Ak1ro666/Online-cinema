import { FC } from 'react';
import { IMenuItem } from '@/shared/ui/Menu/types/menu.interface';
import Link from 'next/link';
import { MaterialIcon } from '@/shared/ui/MaterialIcon';
import cn from 'classnames';
import styles from '@/app/assets/styles/Menu.module.scss';
import { useRouter } from 'next/router';

export const MenuItem: FC<IMenuItem> = ({ icon, title, link }) => {
	const { asPath } = useRouter();

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
