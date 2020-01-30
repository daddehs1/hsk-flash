// Header component
// displays the page header

import React from 'react';

import {HeaderWrapper, TitleText} from './header-styles'
/**
 * Header component
 */
function Header() {
  return (<HeaderWrapper>
    <TitleText>
      HSK Review
    </TitleText>
  </HeaderWrapper>);
}

export default Header;
