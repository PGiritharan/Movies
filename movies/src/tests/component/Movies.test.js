import React from 'react';
import { shallow } from 'enzyme';
import Movies from '../../component/Movies';
import toJson from 'enzyme-to-json';

test('should render Movies correctly', () => {
  const wrapper = shallow(<Movies />);
  expect(toJson(wrapper)).toMatchSnapshot();
});