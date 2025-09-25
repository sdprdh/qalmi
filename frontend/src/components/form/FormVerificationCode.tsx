import { PinInput } from '@/components/ui';
import { Center, Span, Stack, Text } from '@chakra-ui/react';

const FormVerificationCode = () => {
	return (
		<form>
			<Stack spaceY="2">
				<Center my={4}>
					<PinInput
						count={5}
						otp
						autoFocus
					/>
				</Center>

				{/* <FormButtonSubmit field="Konfirmasi" /> */}

				<Text
					textStyle="xs"
					textAlign="center"
				>
					Kirim ulang dalam <Span color="teal.600">4:12</Span>
				</Text>
			</Stack>
		</form>
	);
};

export default FormVerificationCode;
