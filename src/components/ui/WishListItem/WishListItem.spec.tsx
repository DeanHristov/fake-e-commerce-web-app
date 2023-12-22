import WishListItem from '@/components/ui/WishListItem/index';
import { carts } from '@/mocks/data/carts';
import { ICartProduct } from '@/types';
import { render } from '@testing-library/react';

const firstProductItem: ICartProduct =
  carts[0].products['8f12eb53-18c8-46a6-b975-ea0ee8b62d4c'];

describe('UI/Component <WishListItem {...} />', () => {
  it('Should render the default state', () => {
    const { container } = render(<WishListItem product={firstProductItem} />);

    expect(container).toMatchSnapshot();
  });
});
