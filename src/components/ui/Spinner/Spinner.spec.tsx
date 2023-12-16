import { render } from '@testing-library/react';
import Spinner from './';

describe('UI/Component <Spinner {...} />', () => {
  it('Should render the default state', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
