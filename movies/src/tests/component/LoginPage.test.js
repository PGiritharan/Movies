import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LoginPage from '../../component/LoginPage';
import toJson from 'enzyme-to-json';

let login, wrapper;

beforeEach(()=>{
    const mockStore = configureMockStore();
    const store = mockStore({});
    login=jest.fn();
    wrapper=shallow(<Provider store={store}><LoginPage login={login}/></Provider>);
})

test('should render LoginPage correctly',()=>{
    expect(toJson(wrapper)).toMatchSnapshot();
});
