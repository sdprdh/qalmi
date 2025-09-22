import { Box, Center, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

const BannerItem = () => {
	console.log('banner item..');

	return (
		<Box
			asChild
			display="block"
			w="full"
			h="full"
			bg="teal.600"
		>
			<Link href="/">
				<Center h="full">
					<Heading
						color="white"
						size="4xl"
					>
						BANNER
					</Heading>
				</Center>
			</Link>
		</Box>
	);
};

export default memo(BannerItem);
