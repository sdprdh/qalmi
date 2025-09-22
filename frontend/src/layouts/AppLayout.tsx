'use client';

import BannerSkeleton from '@/components/banner/BannerSkeleton';
import Navbar from '@/components/navbar';
import SidebarMobile from '@/components/sidebar/SidebarMobile';
import SidebarSkeleton from '@/components/sidebar/SidebarSkeleton';
import { Grid, GridItem, ScrollArea, Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const Sidebar = dynamic(() => import('@/components/sidebar'), {
	ssr: false,
	loading: SidebarSkeleton,
});

const Banner = dynamic(() => import('@/components/banner'), {
	ssr: false,
	loading: BannerSkeleton,
});

const NO_LAYOUT_ROUTES = ['/auth', '/hc'];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	return (
		<>
			{NO_LAYOUT_ROUTES.some((path) => pathname.startsWith(path)) ? (
				<main>{children}</main>
			) : (
				<>
					<Navbar />
					<SidebarMobile />
					<Grid
						as="main"
						h="vh"
						w="full"
						py={10}
						overflow="hidden"
						bg={{ base: 'white', _dark: 'gray.900' }}
						templateColumns={{
							base: '1fr',
							lg: '210px 1fr',
						}}
					>
						<GridItem hideBelow="lg">
							<Sidebar />
						</GridItem>
						<GridItem>
							<ScrollArea.Root
								h="vh"
								size={{ base: 'xs', md: 'sm' }}
							>
								<ScrollArea.Viewport>
									<ScrollArea.Content py={9}>
										<Stack
											pb={14}
											ps={{ base: 6, md: 8 }}
											pe={{ base: 6, md: 8, lg: 14 }}
										>
											<Banner />
											<Grid
												gap={6}
												templateColumns={{
													base: '1fr',
													md: '200px 1fr',
													lg: '1fr 400px',
												}}
											>
												<GridItem order={{ md: 2, lg: 1 }}>
													{children}
												</GridItem>
												<GridItem
													hideBelow="md"
													order={{ md: 1, lg: 2 }}
												>
													ll
												</GridItem>
											</Grid>
										</Stack>
									</ScrollArea.Content>
								</ScrollArea.Viewport>
								<ScrollArea.Scrollbar bg="teal.subtle">
									<ScrollArea.Thumb bg="teal.solid" />
								</ScrollArea.Scrollbar>
							</ScrollArea.Root>
						</GridItem>
					</Grid>
				</>
			)}
		</>
	);
};

export default AppLayout;
