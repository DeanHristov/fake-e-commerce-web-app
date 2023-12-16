import { render } from '@testing-library/react';
import { carts } from '@/mocks/data/carts';
import { ICartProduct } from '@/types';
import WishListView from '@/components/containers/WishListView/WishListView';
import { useSelector } from '@/store';

const productItem: ICartProduct = carts[0].products[0];

const mockSelector = useSelector as jest.Mock;

describe('Containers/Component <WishListView {...} />', () => {
  afterEach(() => mockSelector.mockReset());

  it('Should be able to render the default state', () => {
    mockSelector.mockReturnValue({});
    const { container } = render(<WishListView />);

    expect(container).toMatchSnapshot();
  });

  it('Should be able to render a list of items', () => {
    mockSelector.mockReturnValue({
      [productItem.id]: productItem,
    });
    const { container, getByText } = render(<WishListView />);

    expect(getByText('Spring and summershoes')).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
