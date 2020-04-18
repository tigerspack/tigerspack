import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

const clickFn = jest.fn();

describe('Button', () => {
  it('Button default', () => {
    const component = shallow(<Button onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
  it('check Button click', () => {
    const component = shallow(<Button onClick={clickFn}>Test button</Button>);
    component.simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
  it('small text button', () => {
    const component = shallow(<Button size={'small'} type={'text'} onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
  it('large outline button', () => {
    const component = shallow(<Button size={'large'} type={'outline'} onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
  it('rounded button with icon', () => {
    const component = shallow(<Button theme={'danger'} icon={<span>icon</span>} type={'rounded'} onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
  it('button with icon only', () => {
    const component = shallow(<Button theme={'info'} icon={<span>icon</span>} onClick={clickFn}/>);
    expect(component).toMatchSnapshot();
  });
  it('disabled button', () => {
    const component = shallow(<Button disabled onClick={clickFn}>Test button</Button>);
    expect(component).toMatchSnapshot();
  });
});
