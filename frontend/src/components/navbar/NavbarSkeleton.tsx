import { Skeleton } from '@/components/ui';
import { HStack } from '@chakra-ui/react';

const Navbar = () => {
	return (
		<HStack
			justify="space-between"
			px={{ base: 4, md: 10, lg: 14 }}
			position="fixed"
			top={0}
			left={0}
			right={0}
			h="16"
			zIndex={99}
			bg={{ base: 'whiteAlpha.800', _dark: 'blackAlpha.800' }}
			backdropFilter="blur(6px)"
			borderBottomColor="gray.100"
			borderBottomWidth={1}
		>
			<Skeleton
				w={14}
				h={4}
			/>
		</HStack>
	);
};

export default Navbar;
