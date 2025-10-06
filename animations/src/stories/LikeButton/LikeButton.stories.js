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
    isLiked: {
      control: { type: 'boolean' },
    },
    numParticles: {
      control: { type: 'number' },
    },
    fadeDuration: {
      control: { type: 'range', default: 1000, max: 5000 },
    },
    disperseDuration: {
      control: { type: 'range', max: 5000 },
      value: { defaultValue: 1000 },
    },
    heartColor: {
      control: { type: 'color' },
    },
    hueMin: {
      control: { type: 'range', min: 0, max: 360 },
    },
    hueMax: {
      control: { type: 'range', min: 0, max: 360 },
    },
    saturation: {
      control: { type: 'range', min: 0, max: 100 },
    },
    luminence: {
      control: { type: 'range', min: 0, max: 100 },
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
    //  heartColor: 'hsl(0 100% 71%)', // for some reason it's invisible unless I set the color here or use a hex color. But it works perfectly fine in the actual app.
  },
};

export const PinkParticles = {
  args: {
    isLiked: false,
    heartColor: 'rgb(255, 49, 186)',
    hueMin: 310,
    hueMax: 345,
    saturation: 80,
    luminence: 60,
  },
};
