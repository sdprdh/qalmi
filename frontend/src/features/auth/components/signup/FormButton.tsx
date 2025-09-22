'use client';

import { Button } from '@/components/ui';
import { useFormStatus } from 'react-dom';

const FormButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			loading={pending}
			type="submit"
			rounded="md"
			colorPalette="teal"
		>
			Daftar
		</Button>
	);
};

export default FormButton;
