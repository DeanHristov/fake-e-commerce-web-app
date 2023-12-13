import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Quantity from './';

describe('UI/Quantity <Quantity {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container } = render(
      <Quantity onDecrease={jest.fn} onIncrease={jest.fn} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be able to see the initial value', () => {
    const { getByText } = render(
      <Quantity onIncrease={jest.fn} onDecrease={jest.fn} initialValue={1} />,
    );

    expect(getByText(1)).toBeVisible();
  });

  it('Should be able to increase the initial value', async () => {
    const mockCallback = jest.fn();
    const { getAllByRole } = render(
      <Quantity
        onIncrease={mockCallback}
        onDecrease={jest.fn}
        initialValue={1}
      />,
    );

    const $buttons: HTMLElement[] = getAllByRole('button');

    await userEvent.click($buttons[1]);

    expect(mockCallback).toHaveBeenCalledWith(2);
  });

  it('Should be able to decrease the initial value', async () => {
    const mockCallback = jest.fn();
    const { getAllByRole } = render(
      <Quantity
        onIncrease={jest.fn}
        onDecrease={mockCallback}
        initialValue={2}
      />,
    );

    const $buttons: HTMLElement[] = getAllByRole('button');

    await userEvent.click($buttons[0]);

    expect(mockCallback).toHaveBeenCalledWith(1);
  });

  it('Should not be able to exceeded the max value', async () => {
    const mockCallback = jest.fn();
    const { getAllByRole } = render(
      <Quantity
        onIncrease={mockCallback}
        onDecrease={jest.fn}
        initialValue={1}
        maxValue={1}
      />,
    );

    const $buttons: HTMLElement[] = getAllByRole('button');

    await userEvent.click($buttons[1]);

    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('Should not be able to exceeded a negative value', async () => {
    const mockCallback = jest.fn();
    const { getAllByRole } = render(
      <Quantity
        onIncrease={mockCallback}
        onDecrease={jest.fn}
        initialValue={1}
      />,
    );

    const $buttons: HTMLElement[] = getAllByRole('button');

    await userEvent.click($buttons[0]);

    expect(mockCallback).not.toHaveBeenCalled();
  });
});
