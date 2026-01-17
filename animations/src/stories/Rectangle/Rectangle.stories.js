import Rectangle from './Rectangle';

export default {
  title: 'Example/Rectangle',
  component: Rectangle,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
  },
};

export const Default = {
  args: {
    width: 200,
    height: 300,
  },
};
