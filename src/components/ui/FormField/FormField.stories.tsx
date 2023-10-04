import type { Meta, StoryObj } from '@storybook/react';

import FormField, { IFormFieldProps } from './index';

const meta: Meta<IFormFieldProps> = {
  title: 'UI/FormField',
  component: FormField,
  parameters: {},
  argTypes: {
    onChange: {
      action: 'onChange():',
    },
  },
};

type Story = StoryObj<IFormFieldProps>;

export const Primary: Story = {
  args: {
    label: 'Username or Email',
  },
};

export default meta;
