import { render } from '@testing-library/react';

import products from '../../../mocks/data/products';
import ProductItem from './ProductItem';
import { IProduct } from '@/types';

const mockProduct: IProduct = products.find((item) => item.id === 1)!;

describe('UI/ProductItem <ProductItem {...} />', () => {
  it('Should render the badge with a counter', () => {
    const { container } = render(
      <ProductItem positionIdx={0} {...mockProduct} />,
    );

    expect(container).toMatchSnapshot();
  });
});
