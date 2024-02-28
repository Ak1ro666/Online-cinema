import { useTypedSelector } from '@/shared/hooks/useTypedSelector';

export const useAuth = () => useTypedSelector(state => state.user);
