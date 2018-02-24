import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});
  
test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});