import { firstMenu, userMenu } from '../modal/menu.data'

import { FC } from 'react';
import { GenresMenu } from '@/shared/ui/GenresMenu'
import { Menu } from '@/shared/ui/Menu'

export const MenuContainer: FC = () => {
	return (
		<div>
			<Menu {...firstMenu} />
			<GenresMenu />
			<Menu {...userMenu} />
		</div>
	);
};

