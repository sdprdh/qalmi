import { For, ScrollArea, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';

const SidebarSkeleton = () => {
	return (
		<ScrollArea.Root
			h="vh"
			ps={6}
			pt={10}
			pe={4}
		>
			<ScrollArea.Viewport>
				<ScrollArea.Content
					spaceY={4}
					pb={16}
				>
					<For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
						{(num, i) => (
							<Stack key={i}>
								<Skeleton
									h={4}
									w={14}
								/>
								<SkeletonText noOfLines={2} />
							</Stack>
						)}
					</For>
				</ScrollArea.Content>
			</ScrollArea.Viewport>
		</ScrollArea.Root>
	);
};

export default SidebarSkeleton;
