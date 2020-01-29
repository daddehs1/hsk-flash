import React from 'react';

import {TabWrapper} from './tab-styles'
/**
 * TabContainer component
 * @param {boolean} props.instant whether switches between active tab should be instant (without transition)
 * @param {string} props.target name of child which will be treated as active tab
 */

function TabView(props) {
  return (<TabWrapper switchDuration={props.switchDuration} fade={props.fade}>{props.children}</TabWrapper>)
}

export default TabView;
