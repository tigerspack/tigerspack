import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('Default Card', () => {
    const component = shallow(<Card>Test alert</Card>);
    expect(component).toMatchSnapshot();
  });
  it('Outline Card', () => {
    const component = shallow(<Card outline title={'Test title'} theme={'danger'} size={2} shadow={1}>Test Card</Card>);
    expect(component).toMatchSnapshot();
  });
  it('Card with icon', () => {
    const component = shallow(<Card outline title={'Test title'} icon={<span>icon</span>} size={4} theme={'danger'}>Test Card</Card>);
    expect(component).toMatchSnapshot();
  });
  it('Card without container', () => {
    const component = shallow(<Card outline withoutContainer title={'Test title'} icon={<span>icon</span>} theme={'danger'}>Test Card</Card>);
    expect(component).toMatchSnapshot();
  });
});
