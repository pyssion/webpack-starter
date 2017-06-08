import constants from '../constants'
const actionTypes = constants.action

const initialState = {}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME: return { ...state, theme: action.theme }
    default: return state
  }
}

export default commonReducer
