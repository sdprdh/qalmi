import { Heading, Stack, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const FormSignup = dynamic(() => import('@/features/auth/components/signup'));

const Page = () => {
	return (
		<Stack>
			<Heading size="md">Buat akun baru</Heading>
			<Text
				fontSize="sm"
				color="gray.500"
				mb={2}
			>
				Mulai perjalananmu dengan Qalmi. Masukkan informasi di bawah untuk mendaftar.
			</Text>

			<FormSignup />
		</Stack>
	);
};

export default Page;
