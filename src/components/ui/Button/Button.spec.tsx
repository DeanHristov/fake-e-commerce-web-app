import { render, waitFor } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';

describe('UI/Component <Button {...} />', () => {
  it('Should render default state', () => {
    const { container } = render(<Button title="Click me" />);

    expect(container).toMatchSnapshot();
  });

  it('Should be able to trigger click event', async () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Button title="Click me" onClick={onChangeMock} />,
    );

    const button = getByRole('button', { name: /Click me/i });
    await waitFor(() => userEvent.click(button));

    expect(onChangeMock).toBeCalled();
  });
});
