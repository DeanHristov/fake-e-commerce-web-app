import { render } from '@testing-library/react';
import CheckoutWizard from './';
import { useSelector } from '@/store';

const mockSelector = useSelector as jest.Mock;

describe('Containers/Controls <CheckoutWizard {...} />', () => {
  mockSelector.mockReturnValue({ products: {}, total: 1, currency: 'EUR' });
  it('Should be able to render the default state of the Component', () => {
    const { container } = render(<CheckoutWizard />);

    expect(container).toMatchSnapshot();
  });
});
