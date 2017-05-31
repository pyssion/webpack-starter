import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from 'store'

// landing page
import Land from 'route/Land'
// main
import Main from 'route/Main'
// about
import About from 'route/About'

const routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>{/* Router only allow for ONE child */}
        <Route exact path="/" component={Land} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/about" component={About} />
      </div>
    </ConnectedRouter>
  </Provider>
)

export default routes