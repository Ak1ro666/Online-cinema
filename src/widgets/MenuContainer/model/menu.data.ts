import { IMenu } from '@/shared/ui/model/Menu';

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdFavorite',
			link: '/favorites',
			title: 'Favorites',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now',
		},
	],
};

export const userMenu: IMenu = {
	title: 'General',
	items: [],
};
