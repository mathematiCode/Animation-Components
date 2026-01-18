import Circle from './Circle';

export default {
  title: 'Example/Circle',
  component: Circle,
  tags: ['autodocs'],
  argTypes: {
    center: {
      control: { type: 'object' },
    },
    radius: {
      control: { type: 'number' },
    },
    fill: {
      control: { type: 'color' },
    },
    strokeColor: {
      control: { type: 'color' },
    },
    strokeWidth: {
      control: { type: 'number' },
    },
  },
};

export const Default = {
  args: {
    center: { x: 50, y: 50 },
    radius: 25,
  },
};
