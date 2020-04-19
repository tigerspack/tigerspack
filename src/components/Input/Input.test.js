import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('Input default', () => {
    const component = shallow(<Input name={'test'} id={'test'} placeholder={'Test'} onKeyUp={() => {}} />);
    expect(component).toMatchSnapshot();
  });
  it('Input with error', () => {
    const component = shallow(<Input error value={'error value'} />);
    expect(component).toMatchSnapshot();
  });
  it('Input with valid value', () => {
    const component = shallow(<Input valid value={'valid value'} />);
    expect(component).toMatchSnapshot();
  });
  it('Input on focus', () => {
    const component = shallow(<Input placeholder={'test'}/>);
    component.childAt(1).simulate('focus');
    expect(component.childAt(0).get(0).props.css.background).toEqual('transparent');
  });
  it('Input on blur', () => {
    const component = shallow(<Input placeholder={'test'}/>);
    component.childAt(1).simulate('focus');
    component.childAt(1).simulate('blur');
    expect(component.childAt(0).get(0).props.css.background).toEqual('#fff');
  });
  it('Input on change', () => {
    const component = shallow(<Input placeholder={'test'}/>);
    const event = { target: { name: 'value', value: 'test' } };
    component.childAt(1).simulate('change', event);
    expect(component.childAt(0).get(0).props.css.background).toEqual('transparent');
  });
});
