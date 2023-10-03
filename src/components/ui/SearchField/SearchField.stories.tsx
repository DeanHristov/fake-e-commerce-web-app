import type { Meta, StoryObj } from '@storybook/react';
import SearchField, { ISearchFieldProps } from './index';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const meta: Meta<ISearchFieldProps> = {
  title: 'UI/SearchField',
  component: SearchField,
  argTypes: {
    onChange: { action: 'deBounce():' },
  },
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<ISearchFieldProps>;

export const Primary: Story = {
  args: {
    placeholder: 'Search here...',
    rightIcon: <MagnifyingGlassIcon className="w-7 h-7 text-zinc-100" />,
  },
};

export default meta;
