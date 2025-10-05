import { fn } from 'storybook/test';
import { LikeButton } from './LikeButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/LikeButton',
  component: LikeButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'hsl(210deg 15% 6%)',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    duration: {
      control: { type: 'select' },
      options: ['1000', '2000', '4000'],
    },
    isLiked: {
      control: { type: 'boolean' },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onLike: fn(),
    onUnlike: fn(),
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    isLiked: false,
  },
};

export const PinkParticles = {
  args: {
    isLiked: false,
    heartColor: 'rgb(255, 49, 186)',
    hueMin: 315,
    hueMax: 360,
    saturation: 80,
    luminence: 60,
  },
};
