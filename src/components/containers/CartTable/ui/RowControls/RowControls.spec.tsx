import { render } from '@testing-library/react';

import RowControls from './RowControls';
import userEvent from '@testing-library/user-event';

describe('UI/Controls <RowControls {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container } = render(
      <RowControls onRemove={jest.fn} onWishList={jest.fn} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be able to trigger "on-remove" action', async () => {
    const mockCallback = jest.fn();

    const { getByTestId } = render(
      <RowControls onRemove={mockCallback} onWishList={jest.fn} />,
    );

    await userEvent.click(getByTestId('btn-remove'));
    expect(mockCallback).toHaveBeenCalled();
  });

  it('Should be able to trigger "on-wishList" action', async () => {
    const mockCallback = jest.fn();

    const { getByTestId } = render(
      <RowControls onRemove={jest.fn} onWishList={mockCallback} />,
    );

    await userEvent.click(getByTestId('btn-wish-list'));

    expect(mockCallback).toHaveBeenCalled();
  });
});
