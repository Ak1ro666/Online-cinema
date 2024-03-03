import { FC } from 'react';

import { Menu } from '@/shared/ui/model/Menu';

import { firstMenu, userMenu } from '../model/menu.data';

import { GenresMenu } from '@/entities/GenresMenu';

export const MenuContainer: FC = () => {
	return (
		<div>
			<Menu {...firstMenu} />
			<GenresMenu />
			<Menu {...userMenu} />
		</div>
	);
};
