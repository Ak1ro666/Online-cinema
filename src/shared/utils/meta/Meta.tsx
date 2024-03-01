import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { API_URL } from '@/shared/config/api.config';
import { siteName, titleMerge } from '@/shared/config/seo.config';
import { MetaNoIndex } from '@/shared/utils/meta/MetaNoIndex';
import { ISeo } from '@/shared/utils/meta/meta.interface';
import { clearText } from '@/shared/utils/string/clearText';

import LogoImage from '@/app/assets/images/logo.png';

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter();
	const currentUrl = `${API_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<title itemProp="headline">{titleMerge(title)}</title>
						<meta itemProp="description" name="description" content={clearText(description, 152)} />
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={image || LogoImage} />
						<meta property="og:site_name" content={siteName} />
						<meta property="og:description" content={clearText(description, 197)} />
					</>
				) : (
					<MetaNoIndex />
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
