import { render } from '@testing-library/react';

import CartTableRow from './CartTableRow';
import { ICartProduct } from '@/types';
import { carts } from '@/mocks/data/carts';

const firstCardProduct: ICartProduct = carts[0].products[0];

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
