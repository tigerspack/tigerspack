import React from 'react';
import { shallow } from 'enzyme';
import Blank from './Blank';
import { colors } from '../../utils/colors';

const testValue = 1;
const testColor = 'primary';

describe('Blank', () => {
  it('Default Blank', () => {
    const component = shallow(<Blank>Test Blank</Blank>);
    expect(component).toMatchSnapshot();
  });
  it('Blank shadow', () => {
    const component = shallow(<Blank shadow={testValue}>Test Blank</Blank>);
    expect(component.get(0).props.css.boxShadow).toEqual(`0 0 ${testValue}px rgba(0, 0, 0, 0.12), 0 ${testValue / 2}px ${testValue}px rgba(0, 0, 0, 0.24)`);
  });
  it('Blank rounded', () => {
    const component = shallow(<Blank rounded={testValue}>Test Blank</Blank>);
    expect(component.get(0).props.css.borderRadius).toEqual(`${testValue}px`);
  });
  it('Blank indent', () => {
    const component = shallow(<Blank indent={testValue}>Test Blank</Blank>);
    expect(component.get(0).props.css.marginBottom).toEqual(`${testValue}px`);
  });
  it('Blank align center', () => {
    const component = shallow(<Blank align={'center'}>Test Blank</Blank>);
    expect(component.get(0).props.css.alignItems).toEqual('center');
    expect(component.get(0).props.css.alignContent).toEqual('center');
  });
  it('Blank align left', () => {
    const component = shallow(<Blank align={'left'}>Test Blank</Blank>);
    expect(component.get(0).props.css.alignItems).toEqual('flex-start');
    expect(component.get(0).props.css.alignContent).toEqual('flex-start');
  });
  it('Blank align right', () => {
    const component = shallow(<Blank align={'right'}>Test Blank</Blank>);
    expect(component.get(0).props.css.alignItems).toEqual('flex-end');
    expect(component.get(0).props.css.alignContent).toEqual('flex-end');
  });
  it('Blank padding', () => {
    const component = shallow(<Blank padding={testValue}>Test Blank</Blank>);
    expect(component.get(0).props.css.padding).toEqual(`${testValue}px`);
  });
  it('Blank border', () => {
    const component = shallow(<Blank border={testColor}>Test Blank</Blank>);
    expect(component.get(0).props.css.border).toEqual(`1px solid ${colors[testColor].color}`);
  });
});
