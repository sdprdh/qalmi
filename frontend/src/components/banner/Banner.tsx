'use client';

import BannerItem from '@/components/banner/BannerItem';
import { Box, HStack, IconButton } from '@chakra-ui/react';
import { memo, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);

	return (
		<Box
			w="full"
			h="180px"
			overflow="hidden"
			position="relative"
		>
			{/* custom navigation */}
			<HStack
				justify="space-between"
				position="absolute"
				top="50%"
				left={4}
				right={4}
				zIndex={90}
				transform="translateY(-50%)"
			>
				<IconButton
					ref={prevRef}
					aria-label="Previous"
					size="2xs"
					rounded="full"
					_hover={{
						bg: 'whiteAlpha.600',
						color: 'white',
					}}
					variant="plain"
					color="whiteAlpha.600"
				>
					<FiChevronLeft />
				</IconButton>
				<IconButton
					ref={nextRef}
					aria-label="Next"
					size="2xs"
					rounded="full"
					_hover={{
						bg: 'whiteAlpha.600',
						color: 'white',
					}}
					variant="plain"
					color="whiteAlpha.600"
				>
					<FiChevronRight />
				</IconButton>
			</HStack>

			<Swiper
				modules={[Pagination, Autoplay, Navigation]}
				loop
				speed={1000}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				autoplay={{
					delay: 3000,
				}}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onBeforeInit={(swiper) => {
					if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
					}
				}}
			>
				{[1, 2, 3, 4, 5, 6].map((num) => (
					<SwiperSlide key={num}>
						<BannerItem />
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default memo(Banner);
