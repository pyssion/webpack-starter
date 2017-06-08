import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducers from './user/reducers'

const reducers = combineReducers({
  router: routerReducer,
  user: userReducers,
})

export default reducers
