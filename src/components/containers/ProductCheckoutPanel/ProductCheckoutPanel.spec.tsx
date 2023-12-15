import { render } from '@testing-library/react';
import ProductCheckoutPanel from './';
import userEvent from '@testing-library/user-event';

// TODO Basically, is a good idea rest of the use cases to be covered from automation tests!
describe('Container/ProductCheckoutPanel <ProductCheckoutPanel {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container, getByRole } = render(
      <ProductCheckoutPanel
        onCheckout={jest.fn}
        totalQuantity={0}
        totalProducts={0}
        total={0}
        discountedTotal={0}
        userId={1}
        currency={'EUR'}
      />,
    );

    expect(getByRole(`button`, { name: /Checkout/i })).toBeDisabled();
    expect(container).toMatchSnapshot();
  });

  it('Should be able to do checkout of selected orders', async () => {
    const mockCheckout = jest.fn();

    const { getByRole, getByText } = render(
      <ProductCheckoutPanel
        onCheckout={mockCheckout}
        totalQuantity={1}
        totalProducts={1}
        total={100}
        discountedTotal={100}
        userId={1}
        currency={'EUR'}
      />,
    );

    const $button: HTMLElement = getByRole('button', { name: /Checkout/i });
    await userEvent.click($button);

    expect(getByText('€100.00')).toBeVisible();
    expect(getByRole(`button`, { name: /Checkout/i })).not.toBeDisabled();
    expect(mockCheckout).toHaveBeenCalledWith(100);
  });
});
