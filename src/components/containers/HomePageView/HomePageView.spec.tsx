import { render } from '@testing-library/react';
import HomePageView from './';
import products from '@/mocks/data/products';
import { IProduct } from '@/types';

const firstTwoProducts: IProduct[] = [products[0], products[1]];
describe('Containers/Component <HomePageView {...} />', () => {
  it('Should be able to render the default state', () => {
    const { container } = render(<HomePageView products={[]} />);

    expect(container).toMatchSnapshot();
  });

  it('Should be able to render a list of products', () => {
    const { container } = render(<HomePageView products={firstTwoProducts} />);

    expect(container).toMatchSnapshot();
  });
});
