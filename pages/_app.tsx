import type { AppProps } from 'next/app';

import { TypeComponentAuthFields } from '../src/pages/auth/types/auth.types';

import '@/app/assets/styles/global.scss';
import { RootProvider } from '@/app/providers/RootProvider';

export type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<RootProvider Component={Component}>
			<Component {...pageProps} />
		</RootProvider>
	);
}

export default MyApp;
