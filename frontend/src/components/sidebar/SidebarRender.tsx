import SidebarItem from '@/components/sidebar/SidebarItem';
import { Button } from '@/components/ui';
import { SidebarRenderProps } from '@/types';
import { For, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const SidebarRender = ({ title, data, footerLink, ...props }: SidebarRenderProps) => {
	return (
		<Stack
			pt={4}
			borderColor="gray.100"
			borderTopWidth={1}
			{...props}
		>
			<Heading
				as="h3"
				size="sm"
				color={{ base: 'gray.600', _dark: 'white' }}
				mb={1}
			>
				{title}
			</Heading>

			<For each={data}>
				{(item, i) => (
					<SidebarItem
						key={i}
						{...item}
					/>
				)}
			</For>

			{footerLink && (
				<Button
					asChild
					variant="plain"
					justifyContent="start"
					size="xs"
					mt={2}
					_hover={{ textDecoration: 'underline' }}
					color="gray.600"
				>
					<Link href={footerLink.href}>
						<FiArrowRight /> {footerLink.field}
					</Link>
				</Button>
			)}
		</Stack>
	);
};

export default memo(SidebarRender);
