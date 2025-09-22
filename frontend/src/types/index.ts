import { StackProps } from '@chakra-ui/react/stack';
import { IconType } from 'react-icons';

// sidebar
export type TSidebarMenu = {
	field: string;
	icon?: IconType;
	href: string;
};

export type SidebarRenderProps = StackProps & {
	title: string;
	data: TSidebarMenu[];
	footerLink?: {
		href: string;
		field: string;
	};
};
