import { FormAuth } from '@/features/auth/components';
import dynamic from 'next/dynamic';
const FormResetPassword = dynamic(() =>
	import('@/features/auth/components').then((md) => md.FormResetPassword),
);

const Page = () => {
	return (
		<FormAuth
			header={{
				title: 'Reset Password',
				description:
					'Masukkan password baru, pastikan berbeda dari password sebelumnya dan mudah diingat.',
			}}
		>
			<FormResetPassword />
		</FormAuth>
	);
};

export default Page;
