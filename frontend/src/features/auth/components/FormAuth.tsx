import { FormAuthProps } from '@/features/auth/types';
import { Heading, Stack, Text } from '@chakra-ui/react';

const FormAuth = ({ children, header }: FormAuthProps) => {
	return (
		<>
			{/* header */}
			{header && (
				<Stack>
					<Heading size="md">{header.title}</Heading>
					<Text
						fontSize="sm"
						color="gray.500"
						mb={2}
					>
						{header.description}
					</Text>
				</Stack>
			)}

			{children}
		</>
	);
};

export default FormAuth;
