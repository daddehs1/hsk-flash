// Icon Button component
// a generic, reusable button component that combines a icon (feather icons) and a label
// responsive layout, removes label on mobile depending on props

import React from 'react';
//TODO: replace loading of all icons with dynamic import?
import {Eye, Check, X, ArrowRight, RotateCcw} from 'react-feather';

import {IconButtonWrapper, Label} from './icon-button-styles'

/**
 * FlashcardTicker component
 * @param {string} props.icon name of the react-feather icon to use
 * @param {string} props.label text to display within the button
 * @param {boolean} props.small whether this icon should remove its label on mobile devices
 * @param {Function} props.onMouseOver onMouseOver event handler, passed on to button
 * @param {Function} props.onMouseOut onMouseOut event handler, passed on to button
 * @param {Function} props.onClick onClick event handler, passed on to button
 */
function IconButton(props) {
  var Icon;
  switch (props.icon) {
    default:
    case 'eye':
      Icon = Eye
      break;
    case 'check':
      Icon = Check
      break;
    case 'x':
      Icon = X
      break;
    case 'arrow-right':
      Icon = ArrowRight
      break;
    case 'restart':
      Icon = RotateCcw
  }

  return (<IconButtonWrapper onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onClick={props.onClick}>
    <Icon size={'4rem'}></Icon>
    <Label small={props.small}>
      {props.label}
    </Label>
  </IconButtonWrapper>)
}

export default IconButton;
