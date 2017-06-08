import React from 'react'
import PropTypes from 'prop-types'


const Row = ({ children }) => <div>{children}</div>

Row.propTypes = {
  children: PropTypes.node,
}

export default Row
