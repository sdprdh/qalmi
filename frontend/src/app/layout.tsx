import AppLayout from '@/layouts/AppLayout';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter, Lobster } from 'next/font/google';
import './global.css';

const ChakraProvider = dynamic(() => import('@/providers').then((md) => md.ChakraProvider));
const TanstackProvider = dynamic(() => import('@/providers').then((md) => md.TanstackProvider));

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const lobster = Lobster({
	variable: '--font-lobster',
	subsets: ['latin'],
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Qalmi',
	description: 'Media Sharing Islami Modern',
};

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={` ${inter.variable} ${lobster.variable}`}>
				<ChakraProvider>
					<TanstackProvider>
						<AppLayout>{children}</AppLayout>
					</TanstackProvider>
				</ChakraProvider>
			</body>
		</html>
	);
};

export default Layout;
