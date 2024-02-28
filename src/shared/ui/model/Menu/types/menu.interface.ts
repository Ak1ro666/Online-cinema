import { TypeMaterialIconName } from '@/shared/ui/ui/MaterialIcon';

export interface IMenuItem {
	icon: TypeMaterialIconName;
	title: string;
	link: string;
}

export interface IMenu {
	title: string;
	items: IMenuItem[];
}
