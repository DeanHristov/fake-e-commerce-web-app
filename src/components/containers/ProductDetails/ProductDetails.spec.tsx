import { render } from '@testing-library/react';
import ProductDetails from '.';
import { IProduct } from '@/types';
import products from '@/mocks/data/products';

const firstProduct: IProduct = products[0];

describe('Containers/ProductDetails <ProductDetails {...} />', () => {
  it('Should render a default state of the component', () => {
    const { container } = render(
      <ProductDetails
        price={firstProduct.price}
        currency={'EUR'}
        name={firstProduct.title}
        image={firstProduct.thumbnail}
        description={firstProduct.description}
        rating={firstProduct.rating}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
