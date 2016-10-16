/**
 * Main entrance of the app.
**/
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Main from './Main'

const AppRouter = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
  </Router>
)

ReactDOM.render(AppRouter, document.getElementById('app'))

