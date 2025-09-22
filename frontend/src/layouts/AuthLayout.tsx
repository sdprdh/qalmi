import ButtonBackToHome from '@/components/ButtonBackToHome';
import { Center, Stack } from '@chakra-ui/react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Center
			as="section"
			w="full"
			minH="vh"
			px={6}
			py={{ lg: 16 }}
			bg={{ base: 'white', _dark: 'gray.900' }}
		>
			<ButtonBackToHome />
			<Stack
				w={{ base: 'full', md: 'md' }}
				px={{ base: 6, md: 8 }}
				py={10}
				shadow={{ base: 'md', _dark: 'xl' }}
				rounded="xl"
			>
				{children}
			</Stack>
		</Center>
	);
};

export default AuthLayout;
