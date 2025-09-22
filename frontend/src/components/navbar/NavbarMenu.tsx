import ButtonToggleSidebar from '@/components/ButtonToggleSidebar';
import Profile from '@/components/Profile';
import SearchInput from '@/components/SearchInput';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { memo } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const ColorModeButton = dynamic(
	() => import('@/components/ui/color-mode').then((mod) => ({ default: mod.ColorModeButton })),
	{
		ssr: false,
	},
);

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
			<ButtonToggleSidebar />
		</HStack>
	);
};

export default memo(NavbarMenu);
