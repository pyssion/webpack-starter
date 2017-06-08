import React from 'react'
import PropTypes from 'prop-types'

const { string, bool, func } = PropTypes


const UserAvatar = ({ type, isLogin = false, name = '', triggerDispatch = () => {} }) => (
  <div onClick={triggerDispatch}>
    type: {type}
    <br />
    isLogin: {String(isLogin)}
    <br />
    { isLogin ? `My name is ${name}` : null }
  </div>
)

UserAvatar.propTypes = {
  type: string.isRequired,
  isLogin: bool,
  name: string,
  triggerDispatch: func,
}

export default UserAvatar
