import { render } from '@testing-library/react';

import products from '../../../mocks/data/products';
import ProductItem, { IProductItemProps } from './ProductItem';

const mockProduct: IProductItemProps = products.find(
  (item: IProductItemProps) =>
    item._id === '29a34b48-8343-4e3d-8c21-3548ba249936',
)!;

describe('UI/ProductItem <ProductItem {...} />', () => {
  it('Should render the badge with a counter', () => {
    const { container } = render(<ProductItem {...mockProduct} />);

    expect(container).toMatchSnapshot();
  });
});
