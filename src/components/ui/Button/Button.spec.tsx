import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('UI/Component <Button {...} />', () => {
  it('Should be able to render the primary state', () => {
    const { container } = render(<Button title="Click me" />);

    expect(container).toMatchSnapshot();
  });

  it('Should be able to render the secondary state', () => {
    const { container } = render(
      <Button variant="secondary" title="Click me" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be able to render it with a  left icon', () => {
    const { container } = render(
      <Button
        leftIcon={<ShoppingCartIcon className="h-6 w-6 text-white" />}
        title="Click me"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be able to render it with a right icon', () => {
    const { container } = render(
      <Button
        rightIcon={<ShoppingCartIcon className="h-6 w-6 text-white" />}
        title="Click me"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('Should be visible the spinner', async () => {
    const { getByTestId } = render(<Button title="Click me" spinning />);

    expect(getByTestId('spinner')).toBeInTheDocument();
    expect(getByTestId('spinner')).toBeVisible();
  });

  it('Should be able to trigger click event', async () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <Button title="Click me" onClick={onChangeMock} />,
    );

    const button: HTMLElement = getByRole('button', { name: /Click me/i });
    await userEvent.click(button);

    expect(onChangeMock).toBeCalled();
  });
});
