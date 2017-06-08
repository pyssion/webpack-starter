import React from 'react'
import PropTypes from 'prop-types'

const { node, string, object } = PropTypes


const Inline = ({ children, className, style }) => (
  <span
    className={className}
    style={style}
  >
    {children}
  </span>
)

Inline.propTypes = {
  children: node,
  className: string,
  style: object,
}

export default Inline
