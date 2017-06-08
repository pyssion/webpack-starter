import React from 'react'
import PropTypes from 'prop-types'

const { node, string, object } = PropTypes


const Block = ({ children, className, style }) => (
  <div
    className={className}
    style={style}
  >
    {children}
  </div>
)

Block.propTypes = {
  children: node,
  className: string,
  style: object,
}

export default Block
