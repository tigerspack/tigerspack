import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

const clickFn = jest.fn();

describe('Button', () => {
  it('should render correctly', () => {
    const component = shallow(<Button onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
  it('small text button', () => {
    const component = shallow(<Button size={'small'} type={'text'} onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
  it('large outline button', () => {
    const component = shallow(<Button size={'large'} type={'outline'} onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
  it('should call clickFn on button click', () => {
    const component = shallow(<Button onClick={clickFn}>Test button</Button>);
    component.simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
