import { render } from '@testing-library/react';
import ProductDetails from '.';
import products from '../../../mocks/data/products';
import { IProduct } from '../../../types';

const firstProduct: IProduct = products[0];

describe('Containers/ProductDetails <ProductDetails {...} />', () => {
  it('Should render a default state of the component', () => {
    const { container } = render(
      <ProductDetails
        id={firstProduct._id}
        price={firstProduct.price}
        currency={firstProduct.currency}
        name={firstProduct.name}
        image={firstProduct.image}
        description={firstProduct.description}
        rating={firstProduct.rating}
        comments={firstProduct?.comments}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
