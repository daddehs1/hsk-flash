import React from 'react';
import {shallow} from 'enzyme';

import Header from '.';
import {HeaderWrapper} from './header-styles'

const setup = (props = {}) => {
  return shallow(<Header {...props}/>)
}

it('renders without error', () => {
  const wrapper = setup();
  const component = wrapper.find(HeaderWrapper);
  expect(component.length).toBe(1)
});
