import { render } from '@testing-library/react';
import WishListItem from '@/components/ui/WishListItem/index';
import { carts } from '@/mocks/data/carts';
import { ICartProduct } from '@/types';

const productItem: ICartProduct = carts[0].products[0];

describe('UI/Component <WishListItem {...} />', () => {
  it('Should render the default state', () => {
    const { container } = render(<WishListItem product={productItem} />);

    expect(container).toMatchSnapshot();
  });
});
