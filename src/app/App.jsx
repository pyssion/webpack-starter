import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import RootPage from 'app/pages/Root'
// global style settings
import 'assets/global.css'

import store, { history } from './store'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* Router only allows for ONE child */}
      <RootPage />
    </ConnectedRouter>
  </Provider>
)

export default App
