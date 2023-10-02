import { render } from '@testing-library/react';
import Widget from './index';
import Divider from '../../ui/Divider';

describe('Container/Widget <Widget {...} />', () => {
  it('Should render default state', () => {
    const { container } = render(
      <Widget title="Widget title">
        <div className="w-96 pb-2">Body content...</div>
        <Divider gradient />
        <h3 className="leading-loose text-center text-slate-900">
          &#169; 2023 | Fake App
        </h3>
      </Widget>,
    );

    expect(container).toMatchSnapshot();
  });
});
