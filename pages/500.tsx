import { NextPage } from 'next';

import { Heading } from '@/shared/ui/ui/Heading';
import Meta from '@/shared/utils/meta/Meta';

const Error505: NextPage = () => {
	return (
		<Meta title="Page not found">
			<Heading title="500 - Server-side error occurred" />
		</Meta>
	);
};

export default Error505;
