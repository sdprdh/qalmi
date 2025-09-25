import Profile from '@/components/Profile';
import SearchInput from '@/components/SearchInput';
import ToggleButtonSidebar from '@/components/sidebar/ToggleButtonSidebar';
import { ColorModeButton } from '@/components/ui';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import { memo } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const NavbarMenu = () => {
	return (
		<HStack>
			<SearchInput />

			<ColorModeButton
				variant={{ base: 'subtle', _dark: 'surface' }}
				rounded="full"
				hideBelow="md"
			/>

			<IconButton
				size="sm"
				variant={{ base: 'subtle', _dark: 'surface' }}
				rounded="full"
			>
				<IoMdNotificationsOutline />
			</IconButton>

			<IconButton
				size="sm"
				variant={{ base: 'subtle', _dark: 'surface' }}
				rounded="full"
			>
				<FiMessageSquare />
			</IconButton>

			<Box
				h="8"
				w="0.3px"
				mx={1}
				hideBelow="lg"
				bg="gray.100"
			/>

			<Profile hideBelow="lg" />
			<ToggleButtonSidebar />
		</HStack>
	);
};

export default memo(NavbarMenu);
