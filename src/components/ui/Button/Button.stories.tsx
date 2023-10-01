import type {Meta, StoryObj} from '@storybook/react';

import Button, {IButtonProps} from './Button'; //@see:  https://storybook.js.org/docs/react/writing-stories/introduction

//@see:  https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<IButtonProps> = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {},
};

type Story = StoryObj<IButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Click me',
  },
};

export default meta;
