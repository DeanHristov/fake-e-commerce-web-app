import { render } from '@testing-library/react';
import ProductCard from '.';
import { IProduct } from '@/types';
import products from '@/mocks/data/products';

const firstProduct: IProduct = products[0];

describe('Containers/ProductCard <ProductCard {...} />', () => {
  it('Should render a default state of the component', () => {
    const { container } = render(
      <ProductCard
        id={firstProduct.id}
        countInStock={firstProduct.stock}
        price={firstProduct.price}
        currency={'EUR'}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render the component when countInStock=0', () => {
    const { container } = render(
      <ProductCard
        id={firstProduct.id}
        countInStock={firstProduct.stock}
        price={firstProduct.price}
        currency={'EUR'}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
