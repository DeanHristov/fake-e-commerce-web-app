import { fireEvent, render, waitFor } from '@testing-library/react';
import InputField from './index';

describe('UI/Component <InputField {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container } = render(
      <InputField
        type="text"
        onChange={jest.fn()}
        placeholder={'Text me...'}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should trigger onChange event during typing', async () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <InputField
        type="text"
        onChange={mockOnChange}
        data-testid="input-field"
        placeholder={'Text me...'}
      />,
    );

    const $input = getByTestId('input-field');
    await waitFor(() =>
      fireEvent.change($input, { target: { value: 'demo-user@example.com' } }),
    );

    expect(mockOnChange).toBeCalledWith('demo-user@example.com');
  });
});
