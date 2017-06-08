import constants from '../constants'
const actionTypes = constants.action
const userTypes = constants.type

const initialUserState = {
  userType: userTypes.ANONYMOUS,
  login: false,
  name: 'who',
}

const userReducer = (state = initialUserState, action) => {
  const { type } = action

  switch (type) {
    case actionTypes.LOGIN: return { ...state, userType: userTypes.BASIC, login: true }
    default: return state
  }
}

export default userReducer
