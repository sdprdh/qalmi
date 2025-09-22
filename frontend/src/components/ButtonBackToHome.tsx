import { Button, ButtonProps } from '@/components/ui';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const ButtonBackToHome = ({ ...props }: ButtonProps) => {
	return (
		<Button
			variant="plain"
			colorPalette="teal"
			size="xs"
			position="absolute"
			top={2}
			left={2}
			w="fit"
			asChild
			{...props}
		>
			<Link href="/">
				<FiArrowLeft /> Kembali ke beranda
			</Link>
		</Button>
	);
};

export default ButtonBackToHome;
