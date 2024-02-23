import { FC } from 'react';
import { IHome } from '../types/home.interface';
import { Layout } from '@/app/providers/LayoutProvider';

export const Home: FC<IHome> = () => {
	return <Layout>Home</Layout>;
};
