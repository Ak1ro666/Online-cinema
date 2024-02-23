import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/app/assets/images/logo.png';

export const Logo: FC = () => {
	return (
		<Link className="px-layout mb-10 block" href="/">
			<Image src={LogoImage} width={247} height={34} priority alt="Logo" draggable={false} />
		</Link>
	);
};
