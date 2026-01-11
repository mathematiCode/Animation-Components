import Parallelogram from './Parallelogram';

export default {
  title: 'Example/Parallelogram',
  component: Parallelogram,
  args: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    offset: {
      control: { type: 'number' },
    },
    strokeColor: {
      control: { type: 'color' },
    },
    fillColor: {
      control: { type: 'color' },
    },
    strokeWidth: {
      control: { type: 5 },
    },
  },
};

export const Default = {
  args: {
    width: 50,
    height: 70,
    offset: 20,
    strokeColor: 'black',
    fillColor: 'none',
    strokeWidth: 5,
  },
};
