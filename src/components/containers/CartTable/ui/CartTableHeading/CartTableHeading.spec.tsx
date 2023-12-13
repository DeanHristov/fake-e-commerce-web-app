import { render } from '@testing-library/react';

import CartTableHeading from './CartTableHeading';

describe('UI/CartTableHeading <CartTableHeading {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container } = render(<CartTableHeading />);

    expect(container).toMatchSnapshot();
  });
});
