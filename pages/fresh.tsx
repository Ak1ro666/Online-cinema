import { GetStaticProps } from 'next';

import { MovieService } from '@/shared/services/movie.service';
import { IMovie } from '@/shared/types/movie.types';

import { NextAuthPage } from '@/pages/auth/types/auth.types';
import { Catalog } from '@/widgets/Catalog';

const FreshPage: NextAuthPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			title="Fresh movies"
			description="New movies and series excellent quality: legal, safe, without ads"
			movies={movies || []}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll();

		return {
			props: {
				movies,
			},
			revalidate: 60
		};
	} catch (error) {
		return {
			props: {
				movies: [],
			},
		};
	}
};

export default FreshPage;
