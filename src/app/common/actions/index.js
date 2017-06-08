import constants from '../constants'
const actionTypes = constants.action

export const changeTheme = theme => ({
  type: actionTypes.CHANGE_THEME,
  theme,
})
