import type {Meta, StoryObj} from '@storybook/react';
import {ShoppingCartIcon} from '@heroicons/react/24/solid';

import Button, {IButtonProps} from './Button';
import {useEffect, useState} from 'react'; //@see:  https://storybook.js.org/docs/react/writing-stories/introduction

//@see:  https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<IButtonProps> = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {},
};

type Story = StoryObj<IButtonProps>;

//@see: https://storybook.js.org/docs/react/writing-stories/introduction#working-with-react-hooks
const ButtonWithSpinning = () => {
  const [spinning, setSpinning] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId: NodeJS.Timeout = setTimeout(() => {
      clearTimeout(timeoutId);
      setSpinning(false);
    }, 3000);
  }, [spinning]);

  return (
    <div className="w-full">
      <Button
        onClick={() => setSpinning(true)}
        primary
        title="Click me"
        spinning={spinning}
      />
    </div>
  );
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => (
    <div className="w-full">
      <Button primary title="Click me" />
    </div>
  ),
};

export const WithSpinningIcon: Story = {
  render: () => <ButtonWithSpinning />,
};

export const PrimaryWithLeftIcon: Story = {
  render: () => (
    <div className="w-full">
      <Button
        primary
        leftIcon={<ShoppingCartIcon className="h-6 w-6 text-white" />}
        title="Click me"
      />
    </div>
  ),
};

export const PrimaryWithRightIcon: Story = {
  render: () => (
    <div className="w-full">
      <Button
        primary
        rightIcon={<ShoppingCartIcon className="h-6 w-6 text-white" />}
        title="Click me"
      />
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div className="w-full">
      <Button secondary title="Click me" />
    </div>
  ),
};

export const SecondaryWithLeftIcon: Story = {
  render: () => (
    <div className="w-full">
      <Button
        secondary
        leftIcon={<ShoppingCartIcon className="h-6 w-6 text-teal-300" />}
        title="Click me"
      />
    </div>
  ),
};

export const SecondaryWithRightIcon: Story = {
  render: () => (
    <div className="w-full">
      <Button
        secondary
        rightIcon={<ShoppingCartIcon className="h-6 w-6 text-teal-300" />}
        title="Click me"
      />
    </div>
  ),
};

export default meta;
