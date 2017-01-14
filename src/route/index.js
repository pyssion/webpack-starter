import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store'

import Container from '../App'
import Header from 'common/Header'

const history = syncHistoryWithStore(browserHistory, store)

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Container}>
        <Route path="main" component={Header} />
      </Route>
    </Router>
  </Provider>
)
