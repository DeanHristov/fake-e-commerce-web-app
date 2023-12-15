import { describe } from 'node:test';
import { render } from '@testing-library/react';
import ModalBox from './';
import { useSelector } from '@/store';

const mockSelector = useSelector as jest.Mock;

describe('Containers / ModalBox', () => {
  afterEach(() => mockSelector.mockReset());

  it('Should be able to render the default state', () => {
    mockSelector.mockReturnValue({
      isOpen: true,
      payload: { type: 'something else' },
    });
    const { container } = render(<ModalBox />);

    expect(container).toMatchSnapshot();
  });
});
