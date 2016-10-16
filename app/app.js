/**
 * Main entrance of the app.
**/
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

const App = ({ title = 'Hello, World!' }) => (
  <div>{title}</div>
)

App.propTypes = {
  title: React.PropTypes.string,
}

const AppRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
)

ReactDOM.render(AppRouter, document.getElementById('app'))

