import { Form, FormButtonSubmit, FormInput, FormInputPassword } from '@/components/form';
import { Checkbox } from '@/components/ui';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

const FormSignup = () => {
	return (
		<Form>
			<FormInput
				groupProps={{ startElement: <FiUser /> }}
				inputProps={{ name: 'name', placeholder: 'Name' }}
			/>

			<FormInput
				groupProps={{ startElement: <FiMail /> }}
				inputProps={{ name: 'email', placeholder: 'Email' }}
			/>

			<FormInputPassword
				groupProps={{ startElement: <FiLock /> }}
				inputProps={{ name: 'password', placeholder: 'Password' }}
			/>

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

			<FormButtonSubmit>Daftar</FormButtonSubmit>

			<Text
				textStyle="xs"
				textAlign="center"
			>
				Sudah punya akun?{' '}
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

export default FormSignup;
