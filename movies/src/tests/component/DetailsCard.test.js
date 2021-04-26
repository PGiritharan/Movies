import React from 'react';
import { shallow } from 'enzyme';
import DetailsCard from '../../component/DetailsCard';
import movie from '../fixures/movies';
import toJson from 'enzyme-to-json';

test('should render Poster correctly', () => {
  const wrapper = shallow(<DetailsCard movie={movie}/>);
  expect(toJson(wrapper)).toMatchSnapshot();
});