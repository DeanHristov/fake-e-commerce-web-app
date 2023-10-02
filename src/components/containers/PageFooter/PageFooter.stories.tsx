import type { Meta, StoryObj } from '@storybook/react';
import PageFooter, { IPageFooterProps } from './PageFooter';

const meta: Meta<IPageFooterProps> = {
  title: 'Containers/PageFooter',
  component: PageFooter,
  parameters: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<IPageFooterProps>;

export const Primary: Story = {
  render: () => (
    <PageFooter>
      <h3 className="p-2 text-center text-slate-900">&#169; 2023 | Fake App</h3>
    </PageFooter>
  ),
};
