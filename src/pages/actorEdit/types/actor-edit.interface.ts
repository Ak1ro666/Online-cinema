import { IActor } from '@/shared/types/movie.types'

export interface IActorEdit extends Omit<IActor, 'id'> {}