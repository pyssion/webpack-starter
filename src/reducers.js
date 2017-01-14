import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  // ...reducers,
  routing: routerReducer
})

export default reducers
