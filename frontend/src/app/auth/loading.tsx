import { Skeleton, SkeletonText } from '@/components/ui';
import { Center, Stack } from '@chakra-ui/react';

const Loading = () => {
	return (
		<Center
			as="section"
			w="full"
			minH="vh"
			bg="white"
			px={6}
			py={{ lg: 16 }}
			position="fixed"
			top="0"
			left={0}
			right={0}
			bottom={0}
			zIndex={100}
		>
			<Stack
				w={{ base: 'full', md: 'md' }}
				h="sm"
				px={{ base: 6, md: 8 }}
				py={10}
				bg={{ base: 'white', _dark: 'slateblue' }}
				shadow="md"
				rounded="xl"
				spaceY={3}
			>
				<SkeletonText
					noOfLines={2}
					variant="pulse"
				/>

				<Skeleton
					h={8}
					variant="pulse"
				/>
				<Skeleton
					h={8}
					variant="pulse"
				/>

				<Skeleton
					h={8}
					variant="pulse"
				/>
			</Stack>
		</Center>
	);
};

export default Loading;
