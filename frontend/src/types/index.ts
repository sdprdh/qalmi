import { CloseButtonProps, FieldProps, InputGroupProps, PasswordInputProps } from '@/components/ui';
import { InputProps, StackProps } from '@chakra-ui/react';
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

export type CloseButtonSidebarProps = {
	isOpen: boolean;
} & CloseButtonProps;

// form
export type FormInputProps = {
	fieldProps?: FieldProps;
	groupProps?: Omit<InputGroupProps, 'children'>;
	inputProps?: InputProps;
};

export type FormInputPasswordProps = {
	fieldProps?: FieldProps;
	groupProps?: Omit<InputGroupProps, 'children'>;
	inputProps?: PasswordInputProps;
};
