'use client';

import { ColorModeProvider, type ColorModeProviderProps } from '@/components/ui/color-mode';
import { system } from '@/lib/theme';
import { ChakraProvider as Provider } from '@chakra-ui/react';

export function ChakraProvider(props: ColorModeProviderProps) {
	return (
		<Provider value={system}>
			<ColorModeProvider {...props} />
		</Provider>
	);
}
