import type { Meta, StoryObj } from '@storybook/react';
import PageSideBarLink, { IPageSideBarLinkProps } from './index';

const meta: Meta<IPageSideBarLinkProps> = {
  title: 'UI/PageSideBarLink',
  component: PageSideBarLink,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<IPageSideBarLinkProps>;

export const Primary: Story = {
  render: () => <PageSideBarLink />,
};
