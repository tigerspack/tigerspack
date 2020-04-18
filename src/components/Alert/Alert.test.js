import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

describe('Alert', () => {
  it('Default Alert', () => {
    const component = shallow(<Alert>Test alert</Alert>);
    expect(component).toMatchSnapshot();
  });
  it('Outline Alert', () => {
    const component = shallow(<Alert outline theme={'danger'}>Test alert</Alert>);
    expect(component).toMatchSnapshot();
  });
  it('Dismissible Alert', () => {
    const component = shallow(<Alert dismissible theme={'success'}>Test alert</Alert>);
    expect(component).toMatchSnapshot();
  });
  it('Dismissible Alert close function', () => {
    const component = shallow(<Alert dismissible>Test alert</Alert>);
    component.childAt(0).simulate('click');
    expect(component.get(0).props.style.display).toEqual('none');
  });
});
