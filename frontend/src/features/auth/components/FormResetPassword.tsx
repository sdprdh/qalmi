import { Stack } from '@chakra-ui/react';
import { FiLock } from 'react-icons/fi';
import { Button, Field, InputGroup, PasswordInput } from '@/components/ui';

const FormResetPassword = () => {
	return (
		<form>
			<Stack spaceY="2">
				<Field invalid>
					<InputGroup startElement={<FiLock />}>
						<PasswordInput
							rounded="md"
							placeholder="Password"
						/>
					</InputGroup>
				</Field>

				<Field invalid>
					<InputGroup startElement={<FiLock />}>
						<PasswordInput
							rounded="md"
							placeholder="Konfirmasi password"
						/>
					</InputGroup>
				</Field>

				<Button
					type="submit"
					rounded="md"
					colorPalette="teal"
				>
					Konfirmasi
				</Button>
			</Stack>
		</form>
	);
};

export default FormResetPassword;
