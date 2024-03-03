export const userLoadingSelect = state => state.registration.isLoggedIn;
export const userRefreshingSelect = state => state.registration.isRefreshing;
export const userSelect = state => state.registration.user;
export const tokenSelect = state => state.registration.token;