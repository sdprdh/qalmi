import { useSidebarStore } from '@/stores/useSidebarStore';
import { IconButton } from '@chakra-ui/react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useShallow } from 'zustand/shallow';

const ToggleButtonSidebar = () => {
	const [toggle] = useSidebarStore(useShallow((state) => [state.toggle]));

	console.log('button toggle sidebar...');

	return (
		<IconButton
			hideFrom="lg"
			size="sm"
			variant={{ base: 'subtle', _dark: 'surface' }}
			rounded="full"
			onClick={toggle}
		>
			<HiMenuAlt4 />
		</IconButton>
	);
};

export default ToggleButtonSidebar;
