import { render } from '@testing-library/react';
import ProductCard from '.';

import products from '../../../mocks/data/products';
import { IProduct } from '../../../types';

const firstProduct: IProduct = products[0];

describe('Containers/ProductCard <ProductCard {...} />', () => {
  it('Should render a default state of the component', () => {
    const { container } = render(
      <ProductCard
        id={firstProduct._id}
        countInStock={firstProduct.countInStock}
        price={firstProduct.price}
        currency={firstProduct.currency}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render the component when countInStock=0', () => {
    const { container } = render(
      <ProductCard
        id={firstProduct._id}
        countInStock={0}
        price={firstProduct.price}
        currency={firstProduct.currency}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
