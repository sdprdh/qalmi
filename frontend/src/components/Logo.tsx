import { Heading, HeadingProps, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from "react";

const Logo = ({ ...props }: HeadingProps) => {
	return (
		<Link href="/">
			<HStack gap={-1}>
				<Image
					src="/logo.png"
					alt="Qalmi"
					width={26}
					height={20}
					style={{ width: 'auto', height: 'auto' }}
					priority
				/>
				<Heading
					fontStyle="italic"
					fontFamily="lobster"
					fontWeight="normal"
					color="teal.600"
					{...props}
				>
					Qalmi
				</Heading>
			</HStack>
		</Link>
	);
};

export default memo(Logo);
