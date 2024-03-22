/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: false,
	env: {
		API_URL: process.env.NEXT_API_URL,
	},
	webpack: config => {
		config.resolve.alias['@'] = path.resolve(__dirname, 'src');
		return config;
	},
};

module.exports = nextConfig;
