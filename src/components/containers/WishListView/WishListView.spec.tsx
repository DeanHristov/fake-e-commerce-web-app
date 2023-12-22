import WishListView from '@/components/containers/WishListView/WishListView';
import { carts } from '@/mocks/data/carts';
import { useSelector } from '@/store';
import { ICartProduct } from '@/types';
import { render } from '@testing-library/react';

const firstProductItem: ICartProduct =
  carts[0].products['8f12eb53-18c8-46a6-b975-ea0ee8b62d4c'];

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
      [firstProductItem._id]: firstProductItem,
    });
    const { container, getByText } = render(<WishListView />);

    expect(getByText('Spring and summershoes')).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
