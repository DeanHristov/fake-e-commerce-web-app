import type {Meta, StoryObj} from '@storybook/react';
import {ShoppingCartIcon} from '@heroicons/react/24/solid';

import Button from './Button'; //@see:  https://storybook.js.org/docs/react/writing-stories/introduction

//@see:  https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },

  argTypes: {
    onClick: { action: 'You clicked me!' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    // variant: 'primary',
    title: 'Click me',
    spinning: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    title: 'Click me',
    spinning: false,
    leftIcon: <ShoppingCartIcon className="h-6 w-6 text-white" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    title: 'Click me',
    spinning: false,
    rightIcon: <ShoppingCartIcon className="h-6 w-6 text-white" />,
  },
};

export default meta;
