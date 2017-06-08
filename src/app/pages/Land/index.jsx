import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './land.css'

const { node } = PropTypes


const Land = ({ children }) => (
  <div className={style.app}>
    <ul>
      <li><Link to="/main">Link to main</Link></li>
      <li><Link to="/about">Link to about</Link></li>
    </ul>
    {children}
  </div>
)

Land.propTypes = {
  children: node,
}

export default Land
