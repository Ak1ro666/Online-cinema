import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { FC, ReactNode } from 'react';

import { accentColor } from '@/shared/constants/constants';

interface IHeadProviderProps {
	children: ReactNode;
}

export const HeadProvider: FC<IHeadProviderProps> = ({ children }) => {
	return (
		<>
			<NextNProgress color={accentColor} startPosition={0.3} stopDelayMs={200} height={3} />
			<Head>
				<meta name="theme-color" content={'#181b1e'} />
				<meta name="msapplication-navbutton-color" content={'#181b1e'} />
				<meta name="apple-mobile-web-app-status-bar-style" content={'#181b1e'} />
			</Head>
			{children}
		</>
	);
};
