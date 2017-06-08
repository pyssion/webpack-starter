import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
/* app reducers */
import commonReducers from './common/reducers'
import userReducers from './user/reducers'

const reducers = combineReducers({
  router: routerReducer,
  user: userReducers,
  common: commonReducers,
})

export default reducers
