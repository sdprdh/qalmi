'use client';

import { Checkbox } from '@/components/ui';
import { HStack } from '@chakra-ui/react';
import Link from 'next/link';

const FormCheckbox = () => {
	return (
		<HStack>
			<Checkbox
				colorPalette="teal"
				size="xs"
			>
				Saya menyetujui{' '}
				<Link
					href="/hc/terms-and-conditions"
					style={{ color: 'teal' }}
				>
					Syarat & Ketentuan
				</Link>{' '}
				dan{' '}
				<Link
					href="/help/privacy-policy"
					style={{ color: 'teal' }}
				>
					Kebijakan Privasi
				</Link>
			</Checkbox>
		</HStack>
	);
};

export default FormCheckbox;
