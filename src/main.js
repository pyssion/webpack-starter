import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'app/App'

export const doRender = RootComponent => {
  render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    document.getElementById('app'),
  )
}

doRender(App)

if (module.hot) { // eslint-disable-line no-undef
  module.hot.accept('app/App', () => { // eslint-disable-line no-undef
    doRender(App)
  })
}
