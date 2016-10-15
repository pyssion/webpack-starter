/**
 * Main entrance of the app.
**/
import React from 'react'
import ReactDOM from 'react-dom'

const App = ({ title = 'Hello, World!' }) => (
  <div>{title}</div>
)

App.propTypes = {
  title: React.PropTypes.string,
}

ReactDOM.render(<App title="Hello from Pyssion in AnYang, again!" />, document.getElementById('app'))
