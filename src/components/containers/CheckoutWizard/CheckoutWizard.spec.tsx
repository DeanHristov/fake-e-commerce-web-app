import { render } from '@testing-library/react';
import CheckoutWizard from './';

describe('Containers/Controls <CheckoutWizard {...} />', () => {
  it('Should be able to render the default state of the Component', () => {
    const { container } = render(<CheckoutWizard />);

    expect(container).toMatchSnapshot();
  });
});
