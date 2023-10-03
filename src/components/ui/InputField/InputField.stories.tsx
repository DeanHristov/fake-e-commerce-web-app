import type { Meta, StoryObj } from '@storybook/react';
import InputField, { IInputFieldProps } from './index';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const meta: Meta<IInputFieldProps> = {
  title: 'UI/InputField',
  component: InputField,
  argTypes: {
    onChange: { action: 'onChange():' },
    type: {
      options: ['text', 'password'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<IInputFieldProps>;

export const Primary: Story = {
  args: {},
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <MagnifyingGlassIcon className="w-7 h-7 text-zinc-100" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <MagnifyingGlassIcon className="w-7 h-7 text-zinc-100" />,
  },
};

export default meta;
