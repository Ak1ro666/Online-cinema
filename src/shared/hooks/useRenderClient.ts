import { useEffect, useState } from 'react';

export const useRenderClient = () => {
	const [isRenderClient, setIsRenderClient] = useState<boolean>(true);

	useEffect(() => {
		isRenderClient && setIsRenderClient(false);
	}, []);

	if (isRenderClient) return;
};
