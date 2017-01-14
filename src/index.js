import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import AppRoute from 'route'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(AppRoute)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('route', () => {
    const NewApp = require('route').default
    render(NewApp)
    const nextRootReducer = require('./reducers')
    store.replaceReducer(nextRootReducer)
  })
}
