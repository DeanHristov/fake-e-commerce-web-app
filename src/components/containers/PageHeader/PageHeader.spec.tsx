import { render } from '@testing-library/react';
import PageHeader from './index';

describe('Containers/PageHeader <PageHeader {...}>', () => {
  it('Should render default state', () => {
    const { container } = render(<PageHeader />);

    expect(container).toMatchSnapshot();
  });
});
