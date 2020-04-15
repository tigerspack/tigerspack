import React from 'react';
import { shallow } from 'enzyme';
import Card from './Alert';

describe('Alert', () => {
  it('Default Alert', () => {
    const component = shallow(<Card>Test alert</Card>);
    expect(component).toMatchSnapshot();
  });
  it('Outline Alert', () => {
    const component = shallow(<Card outline theme={'danger'}>Test alert</Card>);
    expect(component).toMatchSnapshot();
  });
  it('Dismissible Alert', () => {
    const component = shallow(<Card dismissible theme={'success'}>Test alert</Card>);
    expect(component).toMatchSnapshot();
  });
  it('Dismissible Alert close function', () => {
    const component = shallow(<Card dismissible>Test alert</Card>);
    component.find(`.${component.get(0).props.children[0].props.className}`).simulate('click');
    expect(component.get(0).props.style.display).toEqual('none');
  });
});
