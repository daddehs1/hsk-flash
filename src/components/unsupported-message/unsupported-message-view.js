// UnsupportedMessage component
// a component containing a message displayed to user in unsupported conditions

import React from 'react';

import {UnsupportedMessageWrapper} from './unsupported-message-styles'
function UnsupportedMessageView() {
  return <UnsupportedMessageWrapper>Sorry, this application is not optimized for landscape view on mobile.</UnsupportedMessageWrapper>
}

export default UnsupportedMessageView;
