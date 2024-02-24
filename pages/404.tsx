import { NextPage } from 'next';

import { Heading } from '@/shared/ui/Heading';
import Meta from '@/shared/utils/meta/Meta';

const NotFoundPage: NextPage = () => {
	return (
		<Meta title="Page not found">
			<Heading title="404 - Page Not Found" />
		</Meta>
	);
};

export default NotFoundPage;
