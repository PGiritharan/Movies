import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux'
import configureMockStore from "redux-mock-store";
import toJson from 'enzyme-to-json';
import Posters from '../../component/Posters';

test('should render Poster correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore({});
    const wrapper = shallow(<Provider store={store}><Posters /></Provider>);
    expect(toJson(wrapper)).toMatchSnapshot();
});