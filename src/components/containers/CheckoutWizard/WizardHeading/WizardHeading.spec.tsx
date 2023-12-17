import { render } from '@testing-library/react';

import WizardHeading from './WizardHeading';
import { ACTIVE_VARIANT } from '@/components/containers/CheckoutWizard/CheckoutWizard';
import userEvent from '@testing-library/user-event';

describe('UI/Controls <WizardHeading {...} />', () => {
  it('Should be able to render the active state of the Component', () => {
    const { container } = render(
      <WizardHeading
        onClick={jest.fn}
        active={ACTIVE_VARIANT.RECEIPT}
        variant={ACTIVE_VARIANT.RECEIPT}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be able to render the in-active state of the Component', () => {
    const { container } = render(
      <WizardHeading
        onClick={jest.fn}
        active={ACTIVE_VARIANT.PREVIEW}
        variant={ACTIVE_VARIANT.RECEIPT}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it.skip('Should be able to trigger a click event', async () => {
    const mockCB = jest.fn();
    const { getByTestId } = render(
      <WizardHeading
        onClick={mockCB}
        active={ACTIVE_VARIANT.PREVIEW}
        variant={ACTIVE_VARIANT.RECEIPT}
      />,
    );

    const $button: HTMLElement = getByTestId('circle-button');

    await userEvent.click($button);

    expect(mockCB).toHaveBeenCalled();
  });

  it('Should not be able to trigger a click event if it is disabled', async () => {
    const mockCB = jest.fn();
    const { container, getByTestId } = render(
      <WizardHeading
        disabled
        onClick={mockCB}
        active={ACTIVE_VARIANT.PREVIEW}
        variant={ACTIVE_VARIANT.RECEIPT}
      />,
    );

    const $button: HTMLElement = getByTestId('circle-button');

    await userEvent.click($button);

    expect(mockCB).not.toHaveBeenCalled();
    expect(container).toMatchSnapshot();
  });
});
