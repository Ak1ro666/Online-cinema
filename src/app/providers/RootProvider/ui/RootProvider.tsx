import { FC, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { HeadProvider } from '@/app/providers/HeadProvider';
import { Layout } from '@/app/providers/LayoutProvider';
import { ReduxToast } from '@/app/providers/ReduxToast';
import { store } from '@/app/store';

interface IRootProviderProps {
	children: ReactNode;
}

export const RootProvider: FC<IRootProviderProps> = ({ children }) => {
	const [queryClient] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		}),
	);

	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};
