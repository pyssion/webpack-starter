import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Hello } from './hello'

const render = () => {
  ReactDOM.render(
    <Hello compiler='TypeScript' framework='React' />,
    document.getElementById('hello')
  );
}

render()

// @ts-ignore
// if (module.hot) {
  // @ts-ignore
  // module.hot.accept('./hello.tsx', function() {
    // render()
  // })
// }
