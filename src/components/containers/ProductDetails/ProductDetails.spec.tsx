import { render } from '@testing-library/react';
import ProductDetails from '.';

import { useSelector } from '@/store';
import products from '@/mocks/data/products';

const mockSelector = useSelector as jest.Mock;

describe('Containers/ProductDetails <ProductDetails {...} />', () => {
  it('Should render a default state of the component', () => {
    mockSelector.mockReturnValue(products[0]);
    const { container } = render(<ProductDetails productId={1} />);

    expect(container).toMatchSnapshot();
  });
});
