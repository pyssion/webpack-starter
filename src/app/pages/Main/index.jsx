import React from 'react'
import PropTypes from 'prop-types'
import UserAvatar from 'app/user/containers/UserAvatar'

const { string } = PropTypes


const Main = ({ greeting = 'Hi from main!' }) => (
  <div>
    {greeting}
    <UserAvatar />
  </div>
)

Main.propTypes = {
  greeting: string,
}

export default Main
