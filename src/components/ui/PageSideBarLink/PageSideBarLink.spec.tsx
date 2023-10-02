import { render } from '@testing-library/react';
import PageSideBarLink from './index';

describe('UI/PageSideBarLink <PageSideBarLink {...}>', () => {
  it('Should render default state', () => {
    const { container } = render(<PageSideBarLink />);

    expect(container).toMatchSnapshot();
  });
});
