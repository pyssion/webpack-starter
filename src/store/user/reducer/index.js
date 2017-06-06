import constant from '../constant'
const actionTypes = constant.action
const userTypes = constant.type

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
