import type { Meta, StoryObj } from '@storybook/react';
import PageSideBar, { IPageSideBarProps } from './index';

const meta: Meta<IPageSideBarProps> = {
  title: 'Containers/PageSideBar',
  component: PageSideBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<IPageSideBarProps>;

export const Primary: Story = {
  render: () => <PageSideBar />,
};
