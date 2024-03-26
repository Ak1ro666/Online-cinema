import * as userActions from '@/entities/User/model/actions/user.actions';
import { favoriteActions } from '@/entities/Favorites';

export const rootActions = {
	...userActions,
	...favoriteActions,
};
