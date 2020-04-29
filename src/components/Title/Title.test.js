import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';
import { colors } from '../../utils/colors';

const testValue = 1;
const testColor = 'primary';

describe('Title', () => {
  it('Default Title', () => {
    const component = shallow(<Title>Test Blank</Title>);
    expect(component).toMatchSnapshot();
  });
  it('Title size 1', () => {
    const component = shallow(<Title size={1}>Test Blank</Title>);
    expect(component.html().substr(1, 2)).toEqual('h1');
  });
  it('Title size 2', () => {
    const component = shallow(<Title size={2}>Test Blank</Title>);
    expect(component.html().substr(1, 2)).toEqual('h2');
  });
  it('Title size 3', () => {
    const component = shallow(<Title size={3}>Test Blank</Title>);
    expect(component.html().substr(1, 2)).toEqual('h3');
  });
  it('Title size 4', () => {
    const component = shallow(<Title size={4}>Test Blank</Title>);
    expect(component.html().substr(1, 2)).toEqual('h4');
  });
  it('Title size 5', () => {
    const component = shallow(<Title size={5}>Test Blank</Title>);
    expect(component.html().substr(1, 2)).toEqual('h5');
  });
  it('Title indent', () => {
    const component = shallow(<Title indent={testValue}>Test Blank</Title>);
    expect(component.get(0).props.css.marginBottom).toEqual(`${testValue}px`);
  });
  it('Title padding', () => {
    const component = shallow(<Title padding={testValue}>Test Blank</Title>);
    expect(component.get(0).props.css.padding).toEqual(`${testValue}px`);
  });
  it('Title border', () => {
    const component = shallow(<Title border={testColor}>Test Blank</Title>);
    expect(component.get(0).props.css.borderBottom).toEqual(`1px solid ${colors[testColor].color}`);
  });
  it('Title theme', () => {
    const component = shallow(<Title theme={testColor}>Test Blank</Title>);
    expect(component.get(0).props.css.color).toEqual(`${colors[testColor].color}`);
  });
});
