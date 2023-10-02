import { render } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('Containers/PageFooter <PageFooter {...} />', () => {
  it('Should render default state', () => {
    const { container } = render(
      <PageFooter>
        <h3 className="p-2 text-center text-slate-900">
          &#169; 2023 | Fake App
        </h3>
      </PageFooter>,
    );

    expect(container).toMatchSnapshot();
  });
});
