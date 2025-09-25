import { CloseButton } from '@/components/ui';
import { CloseButtonSidebarProps } from '@/types';

const CloseButtonSidebar = ({ isOpen, ...props }: CloseButtonSidebarProps) => {
	return (
		<CloseButton
			hideFrom="lg"
			rounded="full"
			position="fixed"
			top={3}
			right={3}
			zIndex={105}
			transform={isOpen ? 'translateX(4px)' : 'translateX(200%)'}
			variant="subtle"
			size="xs"
			{...props}
		/>
	);
};

export default CloseButtonSidebar;
