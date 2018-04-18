import test from 'ava';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import browserEnv from 'browser-env';
import { StageToggle, Stage } from '../src';

configure({ adapter: new Adapter() });
browserEnv();

test('condition = true', t => {
  const wrapper = mount(
    <StageToggle condition={true}>
      <Stage />
    </StageToggle>
  );
  const stage = wrapper.find('.stage');
  t.is(stage.is('.stage'), true);
});

test('condition = false', t => {
  const wrapper = mount(
    <StageToggle condition={false}>
      <Stage />
    </StageToggle>
  );
  const stage = wrapper.find('.stage');
  t.is(stage.length, 0);
});
