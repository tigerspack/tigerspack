import React from 'react';
import { shallow } from 'enzyme';
import Grid from './Grid';


describe('Grid', () => {
  it('Default Grid', () => {
    const component = shallow(<Grid>Test Grid</Grid>);
    expect(component).toMatchSnapshot();
  });
  it('Grid align', () => {
    const component = shallow(<Grid align={'left'}>Test Grid</Grid>);
    expect(component.get(0).props.css.justifyContent).toEqual('flex-start');
    expect(component.get(0).props.css.justifyItems).toEqual('flex-start');
  });
  it('Grid align right', () => {
    const component = shallow(<Grid align={'right'}>Test Grid</Grid>);
    expect(component.get(0).props.css.justifyContent).toEqual('flex-end');
    expect(component.get(0).props.css.justifyItems).toEqual('flex-end');
  });
  it('Grid align center', () => {
    const component = shallow(<Grid align={'center'}>Test Grid</Grid>);
    expect(component.get(0).props.css.justifyContent).toEqual('center');
    expect(component.get(0).props.css.justifyItems).toEqual('center');
  });
  it('Grid valign', () => {
    const component = shallow(<Grid valign={'top'}>Test Grid</Grid>);
    expect(component.get(0).props.css.alignContent).toEqual('flex-start');
    expect(component.get(0).props.css.alignItems).toEqual('flex-start');
  });
  it('Grid align column', () => {
    const component = shallow(<Grid flow={'column'} align={'left'}>Test Grid</Grid>);
    expect(component.get(0).props.css.flexFlow).toEqual('column');
    expect(component.get(0).props.css.alignContent).toEqual('flex-start');
    expect(component.get(0).props.css.alignItems).toEqual('flex-start');
  });
  it('Grid valign column', () => {
    const component = shallow(<Grid flow={'column'} valign={'top'}>Test Grid</Grid>);
    expect(component.get(0).props.css.justifyContent).toEqual('flex-start');
    expect(component.get(0).props.css.justifyItems).toEqual('flex-start');
  });
  it('Grid stretch width', () => {
    const component = shallow(<Grid stretch={'width'}>Test Grid</Grid>);
    expect(component.get(0).props.css.width).toEqual('100%');
  });
  it('Grid stretch height', () => {
    const component = shallow(<Grid stretch={'height'}>Test Grid</Grid>);
    expect(component.get(0).props.css.height).toEqual('100%');
  });
  it('Grid stretch full', () => {
    const component = shallow(<Grid stretch={'full'}>Test Grid</Grid>);
    expect(component.get(0).props.css.width).toEqual('100%');
    expect(component.get(0).props.css.height).toEqual('100%');
  });
  it('Grid width', () => {
    const component = shallow(<Grid width={1}>Test Grid</Grid>);
    expect(component.get(0).props.css.minWidth).toEqual(`${(100 / 12)}%`);
    expect(component.get(0).props.css.maxWidth).toEqual(`${(100 / 12)}%`);
  });
  it('Grid height', () => {
    const component = shallow(<Grid height={1}>Test Grid</Grid>);
    expect(component.get(0).props.css.minHeight).toEqual(`${(100 / 12)}%`);
    expect(component.get(0).props.css.maxHeight).toEqual(`${(100 / 12)}%`);
  });
  it('Grid padding', () => {
    const component = shallow(<Grid padding={10}>Test Grid</Grid>);
    expect(component.get(0).props.css.padding).toEqual('10px');
  });
  it('Grid wrap', () => {
    const component = shallow(<Grid wrap>Test Grid</Grid>);
    expect(component.get(0).props.css.flexWrap).toEqual('wrap');
  });
});
