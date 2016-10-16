import React from 'react'

const Main = ({ children }) => (
  <div>
    {children}
  </div>
)

Main.propTypes = {
  children: React.PropTypes.node,
}

export default Main 
