import { useTypedSelector } from '@/shared/hooks/useTypedSelector';

export const useFavorites = () => useTypedSelector(state => state.favorites);
