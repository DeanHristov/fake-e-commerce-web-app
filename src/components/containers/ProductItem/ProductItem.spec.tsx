import { render } from '@testing-library/react';

import products from '@/mocks/data/products';
import { IProduct } from '@/types';
import ProductItem from './ProductItem';

const firstProductItem: IProduct = products.find(
  (item) => item._id === 'c5b58931-efbe-47cf-9230-7caf0a4ac98a',
)!;

describe('UI/ProductItem <ProductItem {...} />', () => {
  it('Should render the badge with a counter', () => {
    const { container } = render(
      <ProductItem positionIdx={0} {...firstProductItem} />,
    );

    expect(container).toMatchSnapshot();
  });
});
