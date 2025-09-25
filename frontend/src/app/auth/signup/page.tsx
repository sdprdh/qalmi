import { FormAuth } from '@/features/auth/components';
import dynamic from 'next/dynamic';
const FormSignup = dynamic(() => import('@/features/auth/components').then((md) => md.FormSignup));

const Page = () => {
	return (
		<FormAuth
			header={{
				title: 'Buat akun baru',
				description:
					'Mulai perjalananmu dengan Qalmi. Masukkan informasi di bawah untuk mendaftar.',
			}}
		>
			<FormSignup />
		</FormAuth>
	);
};

export default Page;
