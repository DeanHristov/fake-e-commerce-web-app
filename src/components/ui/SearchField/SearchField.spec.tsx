import { render } from '@testing-library/react';
import SearchField from './SearchField';

describe('UI/Component <InputField {...} />', () => {
  it('Should render a default state of the Component', () => {
    const { container } = render(
      <SearchField onChange={() => {}} placeholder={'Text me...'} />,
    );

    expect(container).toMatchSnapshot();
  });
});
