import { render } from '@testing-library/react';
import StockLabel from './';

describe('UI/Component <StockLabel {...} />', () => {
  it('Should be able to render the default state', () => {
    const { container } = render(<StockLabel stock={20} />);

    expect(container).toMatchSnapshot();
  });

  it('Should be able to render a "warning" state', () => {
    const { container } = render(<StockLabel stock={5} />);

    expect(container).toMatchSnapshot();
  });
});
