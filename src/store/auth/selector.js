export const selectUser = state => state.auth.user;
export const setToken = state => state.auth.token;
export const selectisLoggedIn = state => state.auth.isLoggedIn;
export const selectisRefreshing = state => state.auth.isRefreshing;
export const registerError = state => state.auth.registerError;
export const logInError = state => state.auth.logInError;
