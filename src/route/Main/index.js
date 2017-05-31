import React from 'react'
import PropTypes from 'prop-types'

const { string } = PropTypes


const Main = ({ greeting = 'Hi from main!' }) => (
  <div>
    {greeting}
  </div>
)

Main.propTypes = {
  greeting: string,
}

export default Main
