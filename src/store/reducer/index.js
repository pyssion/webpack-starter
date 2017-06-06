import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from './user'

const reducers = combineReducers({
  router: routerReducer,
  user: userReducer,
})

export default reducers
