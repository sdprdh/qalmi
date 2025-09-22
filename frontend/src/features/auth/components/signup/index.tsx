'use client';

import { Field, InputGroup, PasswordInput } from '@/components/ui';
import { signupAction } from '@/features/auth/actions';
import FormButton from '@/features/auth/components/signup/FormButton';
import FormCheckbox from '@/features/auth/components/signup/FormCheckbox';
import { Input, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useActionState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';

const FormSignup = () => {
	const [state, formAction] = useActionState(signupAction, null);

	return (
		<form action={formAction}>
			<Stack spaceY="2">
				<Field
					invalid={!!state?.errors?.name}
					errorText={state?.errors?.name?.[0]}
				>
					<InputGroup startElement={<FiLock />}>
						<Input
							autoComplete="on"
							name="name"
							rounded="md"
							placeholder="Nama lengkap"
						/>
					</InputGroup>
				</Field>

				<Field
					invalid={!!state?.errors?.email}
					errorText={state?.errors?.email?.[0]}
				>
					<InputGroup startElement={<FiMail />}>
						<Input
							autoComplete="on"
							name="email"
							rounded="md"
							placeholder="Email"
						/>
					</InputGroup>
				</Field>

				<Field
					invalid={!!state?.errors?.password}
					errorText={state?.errors?.password?.[0]}
				>
					<InputGroup startElement={<FiLock />}>
						<PasswordInput
							name="password"
							rounded="md"
							placeholder="Password"
						/>
					</InputGroup>
				</Field>

				<FormCheckbox />
				<FormButton />

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
			</Stack>
		</form>
	);
};

export default FormSignup;
