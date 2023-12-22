import { render } from '@testing-library/react';

import { carts } from '@/mocks/data/carts';
import { ICartProduct } from '@/types';
import CartTableRow from './CartTableRow';

const firstCardProduct: ICartProduct =
  carts[0].products['8f12eb53-18c8-46a6-b975-ea0ee8b62d4c'];

describe('UI/CartTableRow <CartTableRow {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container } = render(<CartTableRow {...firstCardProduct} />);

    expect(container).toMatchSnapshot();
  });

  it('Should render a default state of the Component', () => {
    const { container } = render(<CartTableRow {...firstCardProduct} />);

    expect(container).toMatchSnapshot();
  });
});
