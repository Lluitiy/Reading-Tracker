export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRefreshed = state => state.auth.isRefreshed;
export const getIsLoading = state => state.auth.getIsLoading;
export const getIsLogOut = state => state.auth.isLogOut;

export const getRefreshToken = state => state.auth.refreshToken;
export const getAccessToken = state => state.auth.accessToken;

export const getName = state => state.auth.user?.name;
export const getEmail = state => state.auth.user.email;
