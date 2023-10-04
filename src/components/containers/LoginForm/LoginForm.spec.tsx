import { render } from '@testing-library/react';
import LoginForm from './index';

describe('Container/Component <LoginForm {...} />', () => {
  it('Should render the badge with a counter', () => {
    const { container } = render(<LoginForm />);

    expect(container).toMatchSnapshot();
  });
});
