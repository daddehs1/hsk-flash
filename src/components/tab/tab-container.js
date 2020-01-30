// TabContainer, Tab components
// set of components to allow for generic, reusable tab functionality with smooth transitions
// TabContainer is parent component which conditionally renders Tab based matching props.target with child name
// Tab is child component which contains arbitrary children

import React, {useState, useEffect} from 'react';

import TabView from './tab-view'

const TAB_SWITCH_DURATION = 300;
/**
 * TabContainer component
 * @param {boolean} props.instant whether switches between active tab should be instant (without transition)
 * @param {string} props.target name of child which will be treated as active tab
 */
function Tab(props) {
  // set tabSwitchDuration based on props.instant
  const tabSwitchDuration = props.instant
    ? 0
    : TAB_SWITCH_DURATION;
  const [fade, setFade] = useState(
    props.active
    ? "in"
    : "out");
  const [isDisplayed, setIsDisplayed] = useState(props.active);

  useEffect(() => {
    let fadeTimeout;
    if (props.active) {
      fadeTimeout = setTimeout(() => {
        setFade("in");
        setIsDisplayed(true);
      }, tabSwitchDuration)
    } else {
      setFade("out");
      fadeTimeout = setTimeout(() => {
        setIsDisplayed(false);
      }, tabSwitchDuration)
    }
    return() => {
      clearTimeout(fadeTimeout);
    }
  }, [props.active, props.name, tabSwitchDuration])

  return <TabView switchDuration={tabSwitchDuration} fade={fade}>{isDisplayed && props.children}</TabView>
}

export default Tab;
