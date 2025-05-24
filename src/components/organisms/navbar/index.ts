import {ROUTER_NAME} from '@assets/js/enum/routerEnum';

export interface MenuItem {
	label: string;
	url: string;
	name: ROUTER_NAME;
}

export interface NavMenuItem extends MenuItem {
	isHover: boolean;
}
