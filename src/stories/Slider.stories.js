import React from 'react';
import Slider from './Slider';

export default {
  title: 'Example/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  onChange: (values) => console.log('Changed values:', values),
  NodeColor: '#fffff',
  minColor: '#00000',
  maxColor: '#00000',
  rangeColor: '#9fe5e',
  trackColor: '#ced4d',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  min: 20,
  max: 80,
  changeBy: 10,
  onChange: (values) => console.log('Changed values:', values),
  NodeColor: '#ff6347',
  minColor: '#000000',
  maxColor: '#000000',
  rangeColor: '#ffa500',
  trackColor: '#808080',
};
