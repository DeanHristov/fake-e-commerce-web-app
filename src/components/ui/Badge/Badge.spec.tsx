import { render } from '@testing-library/react';
import Badge from './Badge';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

describe('UI/Component <Button {...} />', () => {
  it('Should render the badge with a counter', () => {
    const { container } = render(
      <Badge counter={6}>
        <ShoppingCartIcon className="h-7 h-7 text-gray-700 animate-shaking" />
      </Badge>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render the badge with a dot ', () => {
    const { container } = render(
      <Badge dot>
        <ShoppingCartIcon className="h-7 h-7 text-gray-700 animate-shaking" />
      </Badge>,
    );

    expect(container).toMatchSnapshot();
  });
});
