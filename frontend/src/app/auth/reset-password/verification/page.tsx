import { Heading, Stack, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const FormVerificationCode = dynamic(() => import('@/components/form/FormVerificationCode'));

const Page = () => {
	return (
		<Stack>
			<Heading size="md">Verifikasi OTP</Heading>
			<Text
				fontSize="sm"
				color="gray.500"
				mb={2}
			>
				Kami telah mengirimkan <strong>OTP</strong> ke <strong>email@example.com</strong>.
				Masukkan kode tersebut untuk melanjutkan proses reset password.
			</Text>
			<FormVerificationCode />
		</Stack>
	);
};

export default Page;
