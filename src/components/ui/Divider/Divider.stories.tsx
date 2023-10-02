import type { Meta, StoryObj } from '@storybook/react';

import Divider, { IDividerProps } from './index';

const meta: Meta<IDividerProps> = {
  title: 'UI/Divider',
  component: Divider,
  argTypes: {},
};

export default meta;

type Story = StoryObj<IDividerProps>;

export const Default: Story = {
  args: {},
};

export const WithGradient: Story = {
  args: {
    gradient: true,
    color: 'via-blue-500',
  },
};
