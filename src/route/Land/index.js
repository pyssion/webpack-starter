import React from 'react'
import { Link } from 'react-router-dom'
import style from './land.css'


const Land = ({ children }) => (
  <div className={style.app}>
    <ul>
      <li><Link to="/main">Link to main</Link></li>
      <li><Link to="/about">Link to about</Link></li>
    </ul>
    {children}
  </div>
)

export default Land
