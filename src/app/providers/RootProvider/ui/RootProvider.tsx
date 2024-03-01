import { FC, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { AuthProvider } from '@/app/providers/AuthProvider';
import { HeadProvider } from '@/app/providers/HeadProvider';
import { Layout } from '@/app/providers/LayoutProvider';
import { ReduxToast } from '@/app/providers/ReduxToast';
import { store } from '@/app/store';
import { TypeComponentAuthFields } from '@/pages/auth/types/auth.types';

type RootProviderProps = TypeComponentAuthFields & {
	children: ReactNode;
};

export const RootProvider: FC<RootProviderProps> = ({ children, Component }) => {
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
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};
