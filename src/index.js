import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import appRoutes from './route'

const doRender = app => {
  render(
    <AppContainer>
      {app}
    </AppContainer>,
    document.getElementById('app'),
  )
}

doRender(appRoutes)

if (module.hot) { // eslint-disable-line no-undef
  module.hot.accept('./route', () => { // eslint-disable-line no-undef
    doRender(appRoutes)
  })
}
