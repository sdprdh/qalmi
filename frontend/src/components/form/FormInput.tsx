import { Field, InputGroup } from '@/components/ui';
import { FormInputProps } from '@/types';
import { Input } from '@chakra-ui/react';

const FormInput = ({ fieldProps, groupProps, inputProps }: FormInputProps) => {
	return (
		<Field {...fieldProps}>
			<InputGroup {...groupProps}>
				<Input
					rounded="md"
					{...inputProps}
				/>
			</InputGroup>
		</Field>
	);
};

export default FormInput;
