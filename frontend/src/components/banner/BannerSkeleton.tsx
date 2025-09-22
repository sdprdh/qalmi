import { Skeleton } from '@chakra-ui/react';

const BannerSkeleton = () => {
	return (
		<Skeleton
			h="180px"
			maxW="1000px"
			rounded="none"
		/>
	);
};

export default BannerSkeleton;
