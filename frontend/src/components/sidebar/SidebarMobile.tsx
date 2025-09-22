'use client';

import SidebarSkeleton from '@/components/sidebar/SidebarSkeleton';
import { CloseButton } from '@/components/ui';
import { useSidebarContext } from '@/hooks/useSidebarContext';
import { Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import('@/components/sidebar'), {
	ssr: false,
	loading: SidebarSkeleton,
});

const SidebarMobile = () => {
	const { state, dispatch } = useSidebarContext();

	return (
		<>
			{/* backdrop */}
			<Stack
				w="full"
				h="full"
				position="fixed"
				top={0}
				left={0}
				bottom={0}
				right={0}
				bg="blackAlpha.500"
				backdropFilter="blur(6px)"
				zIndex={100}
				hideFrom="lg"
				transition="all"
				transitionDuration="revert-layer"
				transform={state.open ? 'translateX(0)' : 'translateX(-100%)'}
				onClick={() => dispatch({ type: 'TOGGLE' })}
			/>

			<CloseButton
				hideFrom="lg"
				rounded="full"
				position="fixed"
				top={3}
				right={3}
				zIndex={105}
				transform={state.open ? 'translateX(4px)' : 'translateX(200%)'}
				variant="subtle"
				size="xs"
				onClick={() => dispatch({ type: 'TOGGLE' })}
			/>

			{/* sidebar */}
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
				transform={state.open ? 'translateX(0)' : 'translateX(-100%)'}
			>
				<Sidebar />
			</Stack>
		</>
	);
};

export default SidebarMobile;
