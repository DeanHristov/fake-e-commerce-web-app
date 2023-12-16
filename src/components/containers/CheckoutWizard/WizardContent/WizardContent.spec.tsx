import { render } from '@testing-library/react';

import WizardContent from './WizardContent';

describe('UI/Controls <WizardContent {...} />', () => {
  it('Should be able to render the active state of the Component', () => {
    const { container } = render(
      <WizardContent isActive>
        <div />
      </WizardContent>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be able to render the in-active state of the Component', () => {
    const { container } = render(
      <WizardContent>
        <div />
      </WizardContent>,
    );

    expect(container).toMatchSnapshot();
  });
});
