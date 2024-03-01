import { getAdminHomeUrl, getAdminUrl } from '@/shared/config/url.config';

import { INavItem } from '../types/admin-navigation.interface';

export const navItems: INavItem[] = [
	{
		title: 'Statistics',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Users',
		link: getAdminUrl('users'),
	},
	{
		title: 'Movies',
		link: getAdminUrl('movies'),
	},
	{
		title: 'Actors',
		link: getAdminUrl('actors'),
	},
	{
		title: 'Genres',
		link: getAdminUrl('genres'),
	},
];
