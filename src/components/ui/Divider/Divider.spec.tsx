import { render } from '@testing-library/react';
import Divider from './index';

describe('UI/Divider <Divider {...} />', () => {
  it('Should render default state', () => {
    const { container } = render(<Divider />);

    expect(container).toMatchSnapshot();
  });

  it('Should render with pink gradient', () => {
    const { container } = render(<Divider gradient color="via-pink-600" />);

    expect(container).toMatchSnapshot();
  });
});
