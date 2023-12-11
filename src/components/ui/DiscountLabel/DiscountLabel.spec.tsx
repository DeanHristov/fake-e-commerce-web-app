import { render } from '@testing-library/react';
import DiscountLabel from './';

describe('UI/Component <DiscountLabel {...} />', () => {
  it('Should be able to render the default state', () => {
    const { container } = render(<DiscountLabel discount={20} />);

    expect(container).toMatchSnapshot();
  });
});
