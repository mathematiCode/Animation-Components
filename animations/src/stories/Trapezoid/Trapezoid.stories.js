import Trapezoid from './Trapezoid';

export default {
  title: 'Example/Trapezoid',
  component: Trapezoid,
  tags: ['autodocs'],
  argTypes: {
    width1: {
      control: { type: 'number' },
    },
    width2: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    topLeft: {
      control: { type: 'number' },
    },
    bottomLeft: {
      control: { type: 'number' },
    },
  },
};

export const Default = {
  args: {
    width1: 50,
    width2: 100,
    height: 70,
    topLeft: 25,
    bottomLeft: 0,
  },
};
