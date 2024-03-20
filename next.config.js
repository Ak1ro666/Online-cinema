/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: false,
	env: {
		API_URL: process.env.NEXT_API_URL,
	},
};

module.exports = nextConfig;
