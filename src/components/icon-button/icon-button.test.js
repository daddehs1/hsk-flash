import React from 'react';
import {shallow} from 'enzyme';

import IconButton from '.';
import {IconButtonWrapper, Label} from './icon-button-styles'

const setup = (props = {}) => {
  return shallow(<IconButton {...props}/>)
}

it('renders Eye Icon without error', () => {
  const wrapper = setup({icon: 'eye'});
  const component = wrapper.find(IconButtonWrapper);
  expect(component.length).toBe(1)
});

it('renders Check Icon without error', () => {
  const wrapper = setup({icon: 'check'});
  const component = wrapper.find(IconButtonWrapper);
  expect(component.length).toBe(1)
});

it('renders X Icon without error', () => {
  const wrapper = setup({icon: 'x'});
  const component = wrapper.find(IconButtonWrapper);
  expect(component.length).toBe(1)
});

it('renders ArrowRight Icon without error', () => {
  const wrapper = setup({icon: 'arrow-right'});
  const component = wrapper.find(IconButtonWrapper);
  expect(component.length).toBe(1)
});

it('renders Restart Icon without error', () => {
  const wrapper = setup({icon: 'restart'});
  const component = wrapper.find(IconButtonWrapper);
  expect(component.length).toBe(1)
});

it('label displays correctly', () => {
  const wrapper = setup({icon: 'eye', label: 'Test Label'});
  const label = wrapper.find(Label)
  expect(label.text()).toBe('Test Label')
});
