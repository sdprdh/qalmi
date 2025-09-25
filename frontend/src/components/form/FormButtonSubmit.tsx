'use client';

import { Button, ButtonProps } from '@/components/ui';
import { useFormStatus } from 'react-dom';

const FormButtonSubmit = ({ children, ...props }: ButtonProps) => {
	const { pending } = useFormStatus();

	return (
		<Button
			loading={pending}
			type="submit"
			rounded="md"
			colorPalette="teal"
			{...props}
		>
			{children}
		</Button>
	);
};

export default FormButtonSubmit;
