import { FC } from 'react';
import { Heading } from '@/shared/ui/Heading';
import { IHome } from '../types/home.interface';
import Meta from '@/shared/utils/meta/Meta';

export const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading title="Watch movies online" className="text-gray-500 mb-8 text-xl" />
		</Meta>
	);
};
