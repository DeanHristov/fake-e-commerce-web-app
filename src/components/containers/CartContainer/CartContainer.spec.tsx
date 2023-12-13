import { render } from '@testing-library/react';

import CartContainer from './CartContainer';
import { carts } from '@/mocks/data/carts';

describe('Container/CartContainer <CartContainer {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container } = render(<CartContainer {...carts[0]} />);

    expect(container).toMatchSnapshot();
  });
});
