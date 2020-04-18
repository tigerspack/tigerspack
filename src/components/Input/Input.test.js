import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('Input default', () => {
    const component = shallow(<Input placeholder={'Test'} />);
    expect(component).toMatchSnapshot();
  });
});
