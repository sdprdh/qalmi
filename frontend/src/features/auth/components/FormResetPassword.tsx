import { Form, FormButtonSubmit, FormInputPassword } from '@/components/form';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FiLock } from 'react-icons/fi';

const FormSignin = () => {
	return (
		<Form>
			<FormInputPassword
				groupProps={{ startElement: <FiLock /> }}
				inputProps={{ name: 'password', placeholder: 'Password' }}
			/>

			<FormInputPassword
				groupProps={{ startElement: <FiLock /> }}
				inputProps={{ name: 'confirmPassword', placeholder: 'Konfirmasi Password' }}
			/>

			<FormButtonSubmit>Konfirmasi</FormButtonSubmit>

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

export default FormSignin;
