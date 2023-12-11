import { render } from '@testing-library/react';

import ProductItem from './ProductItem';
import { IProduct } from '@/types';
import products from '@/mocks/data/products';

const firstProductItem: IProduct = products.find((item) => item.id === 1)!;

describe('UI/ProductItem <ProductItem {...} />', () => {
  it('Should render the badge with a counter', () => {
    const { container } = render(
      <ProductItem positionIdx={0} {...firstProductItem} />,
    );

    expect(container).toMatchSnapshot();
  });
});
