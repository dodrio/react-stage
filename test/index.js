import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Stage from '../src/index.jsx';

configure({ adapter: new Adapter() });

test('general usage', t => {
  const msg = 'testing message';
  const wrapper = shallow(<Stage content={msg} />);
  t.is(wrapper.contains(<div>{msg}</div>), true);
});
