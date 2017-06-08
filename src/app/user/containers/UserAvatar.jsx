import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { loginAction } from '../actions'
import { selectUserType, selectUserIsLogin, selectUserName } from '../selectors'
import UserAvatar from 'components/user/UserAvatar'

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
