import { render } from '@testing-library/react';

import CartContainer from './CartContainer';
import { useSelector } from '@/store';
import { ICart } from '@/types';

const mockUseSelector = useSelector as jest.Mock;

const mockedValue: ICart = {
  id: 1,
  products: {
    1: {
      id: 1,
      title: 'Iphone',
      price: 20,
      quantity: 1,
      total: 20,
      inStock: 1,
      discountedPrice: 55,
      thumbnail: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
    },
  },
  currency: 'EUR',
  total: 1,
  discountedTotal: 1,
  userId: 1,
  totalProducts: 1,
  totalQuantity: 1,
};
// TODO Basically, is a good idea rest of the use cases to be covered from automation tests!
describe('Container/CartContainer <CartContainer {...} />', () => {
  afterEach(() => {
    mockUseSelector.mockReset();
  });

  it('Should render a default state of the Component', () => {
    mockUseSelector.mockReturnValue({
      id: 1,
      products: {},
      currency: 'EUR',
      total: 0,
      discountedTotal: 0,
      userId: 1,
      totalProducts: 0,
      totalQuantity: 0,
    });
    const { container, getByText, getByRole } = render(<CartContainer />);

    expect(getByText('Empty!')).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it('Should be able to display a product', () => {
    mockUseSelector.mockReturnValue(mockedValue);
    const { container, getByText, getByRole } = render(<CartContainer />);

    expect(getByText('Iphone')).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
