import { Children } from 'react';
import { OptimalLayout } from './OptimalLayout';
import './optimalLayout.css';
import { range } from 'lodash';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/OptimalLayout',
  component: OptimalLayout,
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
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    children: {
      control: { type: '' },
    },
  },
  args: {},
};

export const Default = {
  args: {
    width: 600,
    height: 250,
    children: range(30).map((item, index) => (
      <div className="circle" key={index} />
    )),
  },
};

export const SkinnyRect = {
  args: {
    width: 300,
    height: 50,
    children: range(10).map((item, index) => (
      <div className="circle" key={index} />
    )),
  },
};

export const TallRect = {
  args: {
    width: 20,
    height: 400,
    children: range(20).map((item, index) => (
      <div className="circle" key={index} />
    )),
  },
};

export const WeirdOne = {
  args: {
    width: 600,
    height: 100,
    children: range(32).map((item, index) => (
      <div className="circle" key={index} />
    )),
  },
};
