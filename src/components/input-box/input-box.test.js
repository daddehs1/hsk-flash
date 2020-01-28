import React from 'react';
import {mount} from 'enzyme';

import InputBox from '.';
import {InputBoxWrapper, Label} from './input-box-styles'

const setup = (props = {}) => {
  return mount(<InputBox {...props}/>)
}

afterEach(() => {})

it('renders as checkbox without error', () => {
  const wrapper = setup({type: 'checkbox'});
  const component = wrapper.find(InputBoxWrapper);
  expect(component.length).toBe(1);
  wrapper.unmount();
});

it('renders as checkbox without error', () => {
  const wrapper = setup({type: 'radio'});
  const component = wrapper.find(InputBoxWrapper);
  expect(component.length).toBe(1)
  wrapper.unmount();
});

it('label displays correctly', () => {
  const wrapper = setup({type: 'checkbox', label: 'Test Label'});
  const label = wrapper.find(Label)
  expect(label.text()).toBe('Test Label')
  wrapper.unmount();
});
