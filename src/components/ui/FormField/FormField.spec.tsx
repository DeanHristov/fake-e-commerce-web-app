import { render } from '@testing-library/react';
import FormField from './index';

describe('UI/FormField <FormField {...} />', () => {
  it('Should render the badge with a counter', () => {
    const { container } = render(
      <FormField label="Username or an email" onChange={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});
