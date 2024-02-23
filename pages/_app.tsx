import '@/app/assets/styles/global.scss';

import type { AppProps } from 'next/app';
import { RootProvider } from '@/app/providers/RootProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RootProvider>
			<Component {...pageProps} />
		</RootProvider>
	);
}

export default MyApp;

