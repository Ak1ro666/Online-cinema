import { IMovie } from '@/shared/types/movie.types'

export interface IInitialState {
	favorites: IMovie[] | null
}