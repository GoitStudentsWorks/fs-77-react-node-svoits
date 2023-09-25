export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserBirthDate = (state) => {
  state.auth.user.birthDate;
};
export const selectIsLoggedIn = (state) => state.auth.user.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.user.isRefreshing;
export const selectToken = (state) => state.auth.user.current;
export const selectSubscribe = (state) => state.auth.user.email;
export const selectAvatarURL = (state) => state.auth.user.avatarURL;

export const selectTheme = (state) => state.auth.theme;
