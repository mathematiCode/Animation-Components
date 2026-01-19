import Triangle from './Triangle';

export default {
  title: 'Example/Triangle',
  component: Triangle,
  tags: ['autodocs'],
  argTypes: {
    arg1:  {
      control: { type: 'number' },
    },
  }
};

export const Default = {
  args: {},
};
