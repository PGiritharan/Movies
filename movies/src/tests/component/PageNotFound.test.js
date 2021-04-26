import React from 'react';
import { shallow } from 'enzyme';
import  PagrNotFound from '../../component/PageNotFound';
import toJson from 'enzyme-to-json';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<PagrNotFound />);
  expect(toJson(wrapper)).toMatchSnapshot();
});