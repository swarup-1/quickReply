import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Example/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/800x300.png?text=Slide+1',
    'https://via.placeholder.com/800x300.png?text=Slide+2',
    'https://via.placeholder.com/800x300.png?text=Slide+3',
  ],
  prevButton: null,
  nextButton: null,
  width: '80vw',
  height: '300px',
  dotShape: 'dash',
};


export const Primary = Template.bind({});
Primary.args = {
  images: [
    'https://via.placeholder.com/800x300.png?text=Slide+1',
    'https://via.placeholder.com/800x300.png?text=Slide+2',
    'https://via.placeholder.com/800x300.png?text=Slide+3',
    'https://via.placeholder.com/800x300.png?text=Slide+4',
    'https://via.placeholder.com/800x300.png?text=Slide+5',
  ],
  prevButton: 'https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-direction-left-icon.png',
  nextButton: 'https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-direction-right-icon.png',
  width: '80vw',
  height: '300px',
  dotShape: 'dash',
  dotColor: '#000000',
  buttonSize: '40px',
  iconWidth: '20px',
  iconHeight: '20px',
  iconPadding: '5px',
  autoScroll: false,
  autoSlideTime: null
};

export const Secondary = Template.bind({});
Secondary.args = {
  images: [
    'https://via.placeholder.com/800x300.png?text=Slide+1',
    'https://via.placeholder.com/800x300.png?text=Slide+2',
    'https://via.placeholder.com/800x300.png?text=Slide+3',
    'https://via.placeholder.com/800x300.png?text=Slide+4',
    'https://via.placeholder.com/800x300.png?text=Slide+5',
  ],
  prevButton: 'https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-direction-left-icon.png',
  nextButton: 'https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-direction-right-icon.png',
  width: '80vw',
  height: '300px',
  dotShape: 'round',
  dotColor: '#000000',
  buttonSize: '20px',
  iconWidth: '10px',
  iconHeight: '10px',
  iconPadding: '5px',
  autoScroll: true,
  autoSlideTime: 2
};
