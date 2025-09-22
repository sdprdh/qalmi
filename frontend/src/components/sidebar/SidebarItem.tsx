import { Button } from '@/components/ui';
import { TSidebarMenu } from '@/types';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';

const SidebarItem = ({ field, icon, href }: TSidebarMenu) => {
	const Icon = icon;
	return (
		<Button
			asChild
			maxW={{ base: '160px', md: '290px', lg: '160px' }}
			variant={{ base: 'ghost', _dark: 'subtle' }}
			size="xs"
			color={{ base: 'gray.600', _dark: 'white' }}
			rounded="xl"
			justifyContent="start"
			gap={2.5}
			py={4}
		>
			<Link href={href!}>
				{Icon && <Icon />} <Text truncate>{field}</Text>
			</Link>
		</Button>
	);
};

export default memo(SidebarItem);
