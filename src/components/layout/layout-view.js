// Layout component
// simple component which holds the layout for this application
// divided into 3 main sections (header, content, )
// pages are fed into content section through Router component

import React from 'react';
import Header from '../header'
import UnsupportedMessage from '../unsupported-message'
import Router from '../../router/Router.jsx'

import {LayoutWrapper, HeaderContainer, UnsupportedMessageContainer, ContentContainer, FooterContainer} from './layout-styles'
function LayoutView() {
  return (<LayoutWrapper>
    {/* Header */}
    <HeaderContainer>
      <Header/>
    </HeaderContainer>

    {/* Content */}
    {/* if unsuported conditions, display UnsupportedMessage */}
    <UnsupportedMessageContainer>
      <UnsupportedMessage/>
    </UnsupportedMessageContainer>
    {/* else display ContentContainer */}
    <ContentContainer>
      <Router></Router>
    </ContentContainer>

    {/* Footer */}
    <FooterContainer/>
  </LayoutWrapper>);
}

export default LayoutView;
