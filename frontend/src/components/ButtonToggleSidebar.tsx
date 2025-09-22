'use client';

import { useSidebarContext } from '@/hooks/useSidebarContext';
import { IconButton } from '@chakra-ui/react';
import { HiMenuAlt4 } from 'react-icons/hi';

const ButtonToggleSidebar = () => {
	const { dispatch } = useSidebarContext();

	return (
		<IconButton
			hideFrom="lg"
			size="sm"
			variant={{ base: 'subtle', _dark: 'surface' }}
			rounded="full"
			onClick={() => dispatch({ type: 'TOGGLE' })}
		>
			<HiMenuAlt4 />
		</IconButton>
	);
};

export default ButtonToggleSidebar;
