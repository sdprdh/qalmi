import { Form, FormButtonSubmit, FormInput, FormInputPassword } from '@/components/form';
import { Checkbox } from '@/components/ui';
import { HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FiLock, FiUser } from 'react-icons/fi';

const FormSignin = () => {
	return (
		<Form>
			<FormInput
				groupProps={{ startElement: <FiUser /> }}
				inputProps={{ name: 'email', placeholder: 'Email, No hp atau Username' }}
			/>
			<FormInputPassword
				groupProps={{ startElement: <FiLock /> }}
				inputProps={{ name: 'password', placeholder: 'Password' }}
			/>

			<HStack justify="space-between">
				<Checkbox
					colorPalette="teal"
					size="xs"
				>
					Ingatkan saya
				</Checkbox>

				<Text
					asChild
					fontWeight="medium"
					color="teal.600"
					textStyle="xs"
					_hover={{ textDecoration: 'underline' }}
				>
					<Link href="/auth/forgot-password">Lupa password?</Link>
				</Text>
			</HStack>

			<FormButtonSubmit>Masuk</FormButtonSubmit>

			<Text
				textStyle="xs"
				textAlign="center"
			>
				Belum punya akun?{' '}
				<Link
					href="/auth/signup"
					style={{ color: 'teal' }}
				>
					Daftar
				</Link>
			</Text>
		</Form>
	);
};

export default FormSignin;
