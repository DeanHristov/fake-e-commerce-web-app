import type { Meta, StoryObj } from '@storybook/react';

import Comment, { ICommentProps } from './Comment';

//TODO Fix next/image issue in the storybook!
const meta: Meta<ICommentProps> = {
  title: 'UI/Comment',
  component: Comment,
  parameters: {
    layout: 'centered',
  },
};

type Story = StoryObj<ICommentProps>;

export const Primary: Story = {
  args: {
    name: 'John Doue',
    date: '20 April 2022, at 14:88 PM',
    body: 'It is a great product!',
  },
};

export default meta;
