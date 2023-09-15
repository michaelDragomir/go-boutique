/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				fs: false,
				net: false,
				dns: false,
				child_process: false,
				tls: false,
			};
		}
		return config;
	},
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		unoptimized: true,
	},
	swcMinify: true,
	optimizeFonts: true,
};

module.exports = nextConfig;
