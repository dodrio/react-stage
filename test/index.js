import test from 'ava';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import browserEnv from 'browser-env';
import Stage from '../src';

configure({ adapter: new Adapter() });
browserEnv();

test('type="render" && show=true : stage is rendered', t => {
  const wrapper = mount(<Stage type="render" show={true} />);
  const stage = wrapper.find('.stage');
  t.is(stage.is('.stage'), true);
});

test('type="render" && show=true : stage is not rendered', t => {
  const wrapper = mount(<Stage type="render" show={false} />);
  const stage = wrapper.find('.stage');
  t.is(stage.length, 0);
});

test('type="display" && show=true : stage is rendered', t => {
  const wrapper = mount(<Stage type="display" show={true} />);
  const stage = wrapper.find('.stage');
  t.is(stage.is('.stage'), true);
});

test('type="display" && show=false : stage is rendered but hidden', t => {
  const wrapper = mount(<Stage type="display" show={false} />);
  const stage = wrapper.find('.stage');
  t.is(stage.is('.stage'), true);
  t.is(stage.prop('style').opacity, 0);
});
