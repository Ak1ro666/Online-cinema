import { FC, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

