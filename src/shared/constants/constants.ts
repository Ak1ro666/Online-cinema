export const accentColor = '#e30b13';
export const bgColor = '#191b1f';

export const IS_SERVER = typeof window === 'undefined';
export const IS_CLIENT = typeof window !== 'undefined';
export const IS_SERVER_LOCAL_STORAGE = typeof localStorage === 'undefined';
export const IS_CLIENT_LOCAL_STORAGE = typeof localStorage !== 'undefined';

export const FAVORITES_TOKEN_LOCAL_STORAGE = 'favorites'