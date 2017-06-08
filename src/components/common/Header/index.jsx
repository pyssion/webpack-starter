import React from 'react'
import PropTypes from 'prop-types'
import Block from 'components/common/layout/Block'
import Inline from 'components/common/layout/Inline'
import Clickable from 'components/common/Clickable'

const { oneOf, func } = PropTypes


const Header = ({ theme = 'default', onThemeSwitch = () => {} }) => (
  <Block>
    This is a header with its theme set to {theme}.
    You can switch it to:
    <Clickable onClick={() => onThemeSwitch('default')}>
      <Inline>default</Inline>
    </Clickable>
    <Clickable onClick={() => onThemeSwitch('dark')}>
      <Inline>dark</Inline>
    </Clickable>
  </Block>
)

Header.propTypes = {
  theme: oneOf(['default', 'dark']),
  onThemeSwitch: func,
}

export default Header
