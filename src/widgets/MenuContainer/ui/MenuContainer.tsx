import { FC } from 'react';

import { GenresMenu } from '@/shared/ui/model/GenresMenu';
import { Menu } from '@/shared/ui/model/Menu';

import { firstMenu, userMenu } from '../model/menu.data';

export const MenuContainer: FC = () => {
	return (
		<div>
			<Menu {...firstMenu} />
			<GenresMenu />
			<Menu {...userMenu} />
		</div>
	);
};
