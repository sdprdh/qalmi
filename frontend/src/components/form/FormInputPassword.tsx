import { Field, InputGroup, PasswordInput } from '@/components/ui';
import { FormInputPasswordProps } from '@/types';

const FormInputPassword = ({ fieldProps, groupProps, inputProps }: FormInputPasswordProps) => {
	return (
		<Field {...fieldProps}>
			<InputGroup {...groupProps}>
				<PasswordInput
					rounded="md"
					placeholder="password"
					{...inputProps}
				/>
			</InputGroup>
		</Field>
	);
};

export default FormInputPassword;
