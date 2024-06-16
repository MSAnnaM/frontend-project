export const isLoggedIn = state => state.registration.isLoggedIn;
export const isRefreshing = state => state.registration.isRefreshing;
export const userSelect = state => state.registration.user;
export const selectPassword = state => state.registration.password;
export const avatarSelect = state => state.registration.user.avatarURL;
export const tokenSelect = state => state.registration.token;
export const getTheme = state => state.registration.user.theme;
export const selectEmail = state => state.registration.email;
