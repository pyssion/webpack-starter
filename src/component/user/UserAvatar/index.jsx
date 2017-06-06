import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { loginAction } from 'store/user/action'
import { selectUserType, selectUserIsLogin, selectUserName } from 'store/user/selector'

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

const mapStateToProps = createSelector(
  selectUserType,
  selectUserIsLogin,
  selectUserName,
  (type, isLogin, name) => ({ type, isLogin, name }),
)

const mapDispatchToProps = dispatch => ({
  triggerDispatch: () => dispatch(loginAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar)
