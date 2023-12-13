import { render } from '@testing-library/react';

import ProductHeading from './';

describe('UI/ProductHeading <ProductHeading {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container } = render(<ProductHeading title={'Product 1'} id={1} />);

    expect(container).toMatchSnapshot();
  });
});
