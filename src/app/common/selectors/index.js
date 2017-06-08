import { createSelector } from 'reselect'

const selectCommonDomain = state => state.common

export const selectTheme = createSelector(
  selectCommonDomain,
  user => user.theme,
)
