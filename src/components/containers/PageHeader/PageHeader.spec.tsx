import { render } from '@testing-library/react';
import PageHeader from './index';
import { useSelector } from '@/store';

const mockSelector = useSelector as jest.Mock;

describe('Containers/PageHeader <PageHeader {...}>', () => {
  it('Should render default state', () => {
    mockSelector.mockReturnValue({ total: 0 });
    const { container } = render(<PageHeader />);

    expect(container).toMatchSnapshot();
  });
});
