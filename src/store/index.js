import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducer'

const history = createHistory()
const middleware = routerMiddleware(history)

// activate chrome redux-devtools-extension
// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(middleware),
  ),
)

export default store

export { history }
