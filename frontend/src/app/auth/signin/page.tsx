import { FormAuth } from '@/features/auth/components';
import dynamic from 'next/dynamic';
const FormSignin = dynamic(() => import('@/features/auth/components').then((md) => md.FormSignin));

const Page = () => {
	return (
		<FormAuth
			header={{
				title: 'Masuk ke akun Anda',
				description: 'Senang melihatmu lagi! Masuk untuk melanjutkan ke aplikasi Qalmi.',
			}}
		>
			<FormSignin />
		</FormAuth>
	);
};

export default Page;
