import type { Meta, StoryObj } from '@storybook/react';
import LoginForm, { ILoginFormProps } from './LoginForm';

const meta: Meta<ILoginFormProps> = {
  title: 'Component/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },

  argTypes: {},
};

type Story = StoryObj<ILoginFormProps>;

export const Primary: Story = {
  args: {},
};

export default meta;
