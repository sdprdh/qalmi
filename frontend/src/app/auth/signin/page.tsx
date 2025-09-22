import { Heading, Stack, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const FormSignin = dynamic(() => import('@/features/auth/components/FormSignin'));

const Page = () => {
	return (
		<Stack>
			<Heading size="md">Masuk ke akun Anda</Heading>
			<Text
				fontSize="sm"
				color="gray.500"
				mb={2}
			>
				Senang melihatmu lagi! Masuk untuk melanjutkan ke aplikasi Qalmi.
			</Text>

			<FormSignin />
		</Stack>
	);
};

export default Page;
