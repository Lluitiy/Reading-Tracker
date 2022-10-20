export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRefreshing = state => state.auth.isRefreshed;

export const getRefreshToken = state => state.auth.refreshToken;
export const getAccessToken = state => state.auth.accessToken;

export const getName = state => state.auth.user?.name;
export const getEmail = state => state.auth.user.email;
