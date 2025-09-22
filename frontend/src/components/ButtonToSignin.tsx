import Link from 'next/link';
import { Button, ButtonProps } from '@/components/ui';

const ButtonToSignin = ({ ...props }: ButtonProps) => {
	return (
		<Button
			w={{ base: 'full', lg: 'auto' }}
			size="sm"
			rounded="md"
			colorPalette="teal"
			asChild
			{...props}
		>
			<Link href="/auth/signin">Masuk</Link>
		</Button>
	);
};

export default ButtonToSignin;
