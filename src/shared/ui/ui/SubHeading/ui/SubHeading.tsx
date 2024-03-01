import { FC } from 'react';

export const SubHeading: FC<{ title: string }> = ({ title }) => {
	return <h2 className="text-white text-xl mb-5 font-semibold">{title}</h2>;
};
