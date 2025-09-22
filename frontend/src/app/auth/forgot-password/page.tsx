import { Heading, Stack, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const FormForgotPassword = dynamic(() => import('@/features/auth/components/FormForgotPassword'));

const Page = () => {
	return (
		<Stack>
			<Heading size="md">Lupa Password</Heading>
			<Text
				fontSize="sm"
				color="gray.500"
				mb={2}
			>
				Masukkan email, phone atau username Anda, dan kami akan mengirimkan{' '}
				<strong>OTP</strong> untuk mereset password.
			</Text>
			<FormForgotPassword />
		</Stack>
	);
};

export default Page;
