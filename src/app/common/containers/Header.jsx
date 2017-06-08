import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Header from 'components/common/Header'
import { changeTheme } from '../actions'
import { selectTheme } from '../selectors'

const mapStateToProps = createSelector(
  selectTheme,
  theme => ({ theme }),
)

const mapDispatchToProps = dispatch => ({
  onThemeSwitch: newTheme => dispatch(changeTheme(newTheme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
