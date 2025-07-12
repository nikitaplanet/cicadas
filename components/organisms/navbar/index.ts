export interface MenuItem {
	label: string;
	url: string;
	bgImage: string;
}

export interface NavMenuItem extends MenuItem {
	isHover: boolean;
}
