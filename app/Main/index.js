import React from 'react'

const Main = ({ children }) => (
  <div>
    <div>Some Navbar here. This is so awesome!</div>
    <div>Really? What now? What about now?</div>
    <div>Oh yeah!</div>
    {children}
  </div>
)

Main.propTypes = {
  children: React.PropTypes.node,
}

export default Main 
