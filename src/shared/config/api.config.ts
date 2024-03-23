export const API_URL = process.env.API_URL;

export const getAuthUrl = (slug: string = '') => `/auth${slug}`;
export const getRegisterUrl = (slug: string = '') => `/register${slug}`;
export const getUsersUrl = (slug: string = '') => `/users${slug}`;
export const getMyProfileUrl = () => '/auth_me';
export const getMoviesUrl = (slug: string = '') => `/movies${slug}`;
export const getPopularMoviesUrl = (slug: string = '') => `/movies-popular${slug}`;
export const getActorsUrl = (slug: string = '') => `/actors${slug}`;
export const getRatingsUrl = (slug: string = '') => `/ratings${slug}`;
export const getGenresUrl = (slug: string = '') => `/genres${slug}`;
