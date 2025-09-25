import { FormAuth } from '@/features/auth/components';
import dynamic from 'next/dynamic';
const FormForgotPassword = dynamic(() =>
	import('@/features/auth/components').then((md) => md.FormForgotPassword),
);

const Page = () => {
	return (
		<FormAuth
			header={{
				title: 'Lupa Password',
				description: (
					<>
						Masukkan email, phone atau username Anda, dan kami akan mengirimkan{' '}
						<strong>OTP</strong> untuk mereset password.
					</>
				),
			}}
		>
			<FormForgotPassword />
		</FormAuth>
	);
};

export default Page;
