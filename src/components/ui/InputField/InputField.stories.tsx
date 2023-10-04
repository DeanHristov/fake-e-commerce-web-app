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
  render: (props) => {
    return (
      <div className="h-10">
        <InputField {...props} />
      </div>
    );
  },
};

export const WithLeftIcon: Story = {
  render: (props) => (
    <div className="h-10">
      <InputField
        leftIcon={<MagnifyingGlassIcon className="w-7 h-7 text-zinc-100" />}
        {...props}
      />
    </div>
  ),
};

export const WithRightIcon: Story = {
  render: (props) => (
    <div className="h-10">
      <InputField
        rightIcon={<MagnifyingGlassIcon className="w-7 h-7 text-zinc-100" />}
        {...props}
      />
    </div>
  ),
};

export default meta;
