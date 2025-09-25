'use client';

import { Stack, StackProps } from '@chakra-ui/react';

type BackdropProps = { isVisible: boolean } & StackProps;

const Backdrop = ({ isVisible, ...props }: BackdropProps) => {
	return (
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
			transform={isVisible ? 'translateX(0)' : 'translateX(-100%)'}
			{...props}
		/>
	);
};

export default Backdrop;
