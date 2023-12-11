import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StarRating from './';

describe('UI/Component <StarRating {...} />', () => {
  it('Should render the default state', () => {
    const { container } = render(
      <StarRating
        activeColor="#1B1B1B"
        inActiveColor="#D1D1D1"
        starCount={5}
        rating={2.5}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be visible', () => {
    const { getByTestId } = render(
      <StarRating
        activeColor="#1B1B1B"
        inActiveColor="#D1D1D1"
        starCount={5}
        rating={2.5}
      />,
    );

    expect(getByTestId('star-rating')).toBeVisible();
  });

  it('Should be able to render exact amount of stars', () => {
    const { getAllByTestId } = render(
      <StarRating
        activeColor="#1B1B1B"
        inActiveColor="#D1D1D1"
        starCount={5}
        rating={2.5}
      />,
    );

    const starsArray: HTMLElement[] = getAllByTestId('star-item');
    expect(starsArray.length).toEqual(5);
  });

  it('Should be able to trigger click event', async () => {
    const mockCB = jest.fn();

    const { getAllByTestId } = render(
      <StarRating
        activeColor="#1B1B1B"
        inActiveColor="#D1D1D1"
        starCount={5}
        rating={2.5}
        onChange={mockCB}
      />,
    );

    const starsArray: HTMLElement[] = getAllByTestId('star-item');

    await userEvent.click(starsArray[0]);

    expect(mockCB).toHaveBeenCalledWith(1);
  });
});
