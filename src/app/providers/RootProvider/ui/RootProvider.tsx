import { FC, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '@/app/providers/LayoutProvider';

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
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	);
};
