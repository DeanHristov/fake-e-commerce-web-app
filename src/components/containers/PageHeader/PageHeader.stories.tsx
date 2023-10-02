import type { Meta, StoryObj } from '@storybook/react';
import PageHeader, { IPageHeaderProps } from './index';

const meta: Meta<IPageHeaderProps> = {
  title: 'Containers/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<IPageHeaderProps>;

export const Primary: Story = {
  render: () => <PageHeader />,
};
