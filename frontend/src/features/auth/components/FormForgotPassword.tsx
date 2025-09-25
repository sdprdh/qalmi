import { Form, FormButtonSubmit, FormInput } from '@/components/form';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';

const FormForgotPassword = () => {
	return (
		<Form>
			<FormInput
				groupProps={{ startElement: <FiUser /> }}
				inputProps={{ name: 'identifier', placeholder: 'Email, No hp atau Username' }}
			/>

			<FormButtonSubmit>Minta OTP</FormButtonSubmit>

			<Text
				textStyle="xs"
				textAlign="center"
			>
				Sudah ingat akun?{' '}
				<Link
					href="/auth/signin"
					style={{ color: 'teal' }}
				>
					Masuk
				</Link>
			</Text>
		</Form>
	);
};

export default FormForgotPassword;
