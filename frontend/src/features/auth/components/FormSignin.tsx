import { Button, Checkbox, Field, InputGroup, PasswordInput } from '@/components/ui';
import { HStack, Input, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FiLock, FiUser } from 'react-icons/fi';

const FormSignin = () => {
	return (
		<form>
			<Stack spaceY="2">
				<Field>
					<InputGroup startElement={<FiUser />}>
						<Input
							rounded="md"
							placeholder="Email, phone atau username"
						/>
					</InputGroup>
				</Field>

				<Field>
					<InputGroup startElement={<FiLock />}>
						<PasswordInput
							rounded="md"
							placeholder="Password"
						/>
					</InputGroup>
				</Field>

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

				<Button
					type="submit"
					rounded="md"
					colorPalette="teal"
				>
					Masuk
				</Button>

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
			</Stack>
		</form>
	);
};

export default FormSignin;
