'use client';

import Backdrop from '@/components/Backdrop';
import CloseButtonSidebar from '@/components/sidebar/CloseButtonSidebar';
import SidebarSkeleton from '@/components/sidebar/SidebarSkeleton';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useShallow } from 'zustand/shallow';

const Sidebar = dynamic(() => import('@/components/sidebar').then((md) => md.Sidebar), {
	ssr: false,
	loading: SidebarSkeleton,
});

const SidebarMobile = () => {
	const [isOpen, close] = useSidebarStore(useShallow((state) => [state.isOpen, state.close]));

	return (
		<>
			<Stack
				w={{ base: '210px', md: '300px' }}
				h="100vh"
				position="fixed"
				top={0}
				left={0}
				bottom={0}
				bg={{ base: 'white', _dark: 'gray.900' }}
				zIndex={110}
				hideFrom="lg"
				transition="all"
				animationDirection="reverse"
				transitionDuration="slower"
				anchorName="bounce, fade-in"
				transform={isOpen ? 'translateX(0)' : 'translateX(-100%)'}
			>
				<Sidebar />
			</Stack>

			<Backdrop
				isVisible={isOpen}
				onClick={close}
			/>

			<CloseButtonSidebar
				isOpen={isOpen}
				onClick={close}
			/>
		</>
	);
};

export default SidebarMobile;
