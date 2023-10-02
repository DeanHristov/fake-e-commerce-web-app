import type { Meta, StoryObj } from '@storybook/react';

import Widget, { IWidgetProps } from './index';
import Divider from '../../ui/Divider';

const meta: Meta<IWidgetProps> = {
  title: 'Containers/Widget',
  component: Widget,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<IWidgetProps>;

export const Default: Story = {
  render: () => (
    <Widget
      title="Widget title"
      subTitle="Lorem ipsum dolor sit amet, consectetur"
    >
      <Divider gradient />
      <h3 className="leading-loose text-center text-slate-900">
        &#169; 2023 | Fake App
      </h3>
    </Widget>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Widget
      title="Widget title"
      subTitle="Lorem ipsum dolor sit amet, consectetur"
    >
      <div className="w-96">Body content...</div>
    </Widget>
  ),
};
