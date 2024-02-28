import { FC } from 'react';
import { toastr } from 'react-redux-toastr';

import { Heading } from '@/shared/ui/ui/Heading';
import Meta from '@/shared/utils/meta/Meta';

import { IHome } from '../types/home.interface';

export const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading title="Watch movies online" className="text-gray-500 mb-8 text-xl" />

			<button style={{ color: 'white' }} onClick={() => toastr.success('Auth', 'You have successfully logged in!')}>
				Show message
			</button>
		</Meta>
	);
};
