export interface ITableItem {
	id: number;
	editUrl: string;
	email?: string;
	items?: string[];
}

export interface IAdminTableItem {
	tableItem: ITableItem;
	removeHandler: (id: number) => void;
}
