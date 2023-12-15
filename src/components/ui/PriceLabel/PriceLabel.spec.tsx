import { render } from '@testing-library/react';
import PriceLabel from './';

describe('UI/Component <PriceLabel {...} />', () => {
  it('Should render the default state', () => {
    const { container } = render(<PriceLabel currency="EUR" price={34.2} />);

    expect(container).toMatchSnapshot();
  });

  it('Should render the both prices', () => {
    const { container } = render(
      <PriceLabel discountPercentage={12.9} price={34.2} currency={'USD'} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be able to see the old price based on discount percentage', () => {
    const { getByText } = render(
      <PriceLabel currency="EUR" price={549} discountPercentage={12.9} />,
    );

    expect(getByText(/€620.00/i)).toBeVisible();
  });
});
