import type { Meta, StoryObj } from '@storybook/react';

import Badge, { IBadgeProps } from './Badge';
import { CogIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

const meta: Meta<IBadgeProps> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<IBadgeProps>;

export const Primary: Story = {
  args: {
    counter: 1,
    children: <ShoppingCartIcon className="h-7 h-7 text-blue-500" />,
  },
};

export const WithDot: Story = {
  args: {
    dot: true,
    children: <CogIcon className="h-7 h-7 text-blue-500" />,
  },
};

export default meta;
