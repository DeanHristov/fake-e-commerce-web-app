import { render } from '@testing-library/react';
import PageSideBar from './index';

describe('Containers/PageSideBar <PageSideBar {...}>', () => {
  it('Should render default state', () => {
    const { container } = render(<PageSideBar />);

    expect(container).toMatchSnapshot();
  });
});
