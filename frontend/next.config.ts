import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['@chakra-ui/react', '@emotion/react', 'swiper'],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bit.ly',
				port: '',
				pathname: '/**',
				search: '',
			},
		],
	},
};

export default nextConfig;
