import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import App from 'sample/App'
import store, { history } from 'store'

const routes = (
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>
)

export default routes
