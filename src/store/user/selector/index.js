import { createSelector } from 'reselect'

const selectUserDomain = state => state.user

export const selectUserType = createSelector(
  selectUserDomain,
  user => user.userType,
)

export const selectUserIsLogin = createSelector(
  selectUserDomain,
  user => user.login,
)

export const selectUserName = createSelector(
  selectUserDomain,
  user => user.name,
)
