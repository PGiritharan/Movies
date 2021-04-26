import React from 'react';
import { shallow } from 'enzyme';
import Poster from '../../component/poster';
import movie from '../fixures/movies';
import toJson from 'enzyme-to-json';

test('should render Poster correctly', () => {
  const wrapper = shallow(<Poster movie={movie}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});
