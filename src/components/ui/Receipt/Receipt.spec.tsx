import { render } from '@testing-library/react';
import Receipt from '@/components/ui/Receipt';
import { ICartProduct } from '@/types';

describe('UI/Component <Receipt {...} />', () => {
  it('Should be able to render the render the default state', () => {
    const { container } = render(
      <Receipt total={20} currency={'EUR'} products={[] as ICartProduct[]} />,
    );

    expect(container).toMatchSnapshot();
  });
});
