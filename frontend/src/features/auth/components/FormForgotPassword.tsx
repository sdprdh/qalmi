import { Button, Field, InputGroup } from '@/components/ui';
import { Input, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { memo } from 'react';
import { FiUser } from 'react-icons/fi';

const FormForgotPassword = () => {
	return (
		<form>
			<Stack spaceY="2">
				<Field
					invalid
					errorText="This field is required"
				>
					<InputGroup startElement={<FiUser />}>
						<Input
							rounded="md"
							placeholder="Email, phone atau Username"
						/>
					</InputGroup>
				</Field>

				<Button
					type="submit"
					rounded="md"
					colorPalette="teal"
				>
					Minta OTP
				</Button>

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
			</Stack>
		</form>
	);
};

export default FormForgotPassword;
