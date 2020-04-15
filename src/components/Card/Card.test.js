import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Alert', () => {
  it('Default Alert', () => {
    const component = shallow(<Card>Test alert</Card>);
    expect(component).toMatchSnapshot();
  });
});
