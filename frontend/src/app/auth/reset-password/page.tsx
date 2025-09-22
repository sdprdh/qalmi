import { Heading, Stack, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const FormResetPassword = dynamic(() => import('@/features/auth/components/FormResetPassword'));

const Page = () => {
	return (
		<Stack>
			<Heading size="md">Reset Password</Heading>
			<Text
				fontSize="sm"
				color="gray.500"
				mb={2}
			>
				Masukkan password baru, pastikan berbeda dari password sebelumnya dan mudah diingat.
			</Text>
			<FormResetPassword />
		</Stack>
	);
};

export default Page;
