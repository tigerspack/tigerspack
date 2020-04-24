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
    expect(component.html().substr(1, 2)).toEqual('h2');
  });
  it('Title size', () => {
    const component = shallow(<Title size={'large'}>Test Blank</Title>);
    expect(component.html().substr(1, 2)).toEqual('h1');
  });
  it('Title small', () => {
    const component = shallow(<Title size={'small'}>Test Blank</Title>);
    expect(component.html().substr(1, 2)).toEqual('h3');
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
});
