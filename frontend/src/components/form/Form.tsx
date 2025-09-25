import { Stack } from '@chakra-ui/react';
import { HtmlHTMLAttributes } from 'react';

const Form = ({ children, ...props }: HtmlHTMLAttributes<HTMLFormElement>) => {
	return (
		<form {...props}>
			<Stack spaceY={3}>{children}</Stack>
		</form>
	);
};

export default Form;
