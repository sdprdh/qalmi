import AppLayout from '@/layouts/AppLayout';
import { ChakraProvider, SidebarProvider, TanstackProvider } from '@/providers';
import type { Metadata } from 'next';
import { Inter, Lobster } from 'next/font/google';
import './global.css';

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
						<SidebarProvider>
							<AppLayout>{children}</AppLayout>
						</SidebarProvider>
					</TanstackProvider>
				</ChakraProvider>
			</body>
		</html>
	);
};

export default Layout;
