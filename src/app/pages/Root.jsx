import React from 'react'
import { Route } from 'react-router'
import Block from 'components/common/layout/Block'
import Header from 'app/common/containers/Header'
/* Routes */
import Land from './Land'
import Main from './Main'
import About from './About'


/**
 * This is the Root component of the app's route.
 * It contains information of first level route setup.
 * @return {React.Component} A component with first level route setup.
 */
const Root = () => (
  <Block>
    <Header />
    <Route exact path="/" component={Land} />
    <Route exact path="/main" component={Main} />
    <Route exact path="/about" component={About} />
  </Block>
)

export default Root
