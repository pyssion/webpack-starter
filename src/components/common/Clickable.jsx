import React from 'react'
import PropTypes from 'prop-types'

const { node, func } = PropTypes

/**
 * This component SHOULD BE a higher order component that adds
 * onClick handler to its children components.
 * @return {React.Component} same component as its children with onClick support.
 */
const Clickable = ({ children, onClick = () => {} }) => (
  <span onClick={() => onClick()}>
    {children}
  </span>
)

Clickable.propTypes = {
  children: node,
  onClick: func,
}

export default Clickable
