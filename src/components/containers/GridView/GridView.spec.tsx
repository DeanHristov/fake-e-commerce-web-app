import { render } from '@testing-library/react';
import GridView from './';
import { StoreProvider } from '@/store/StoreProvider';
import { server } from '@/mocks/server';

describe('Container/GridView <GridView {...} />', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('Should render default state', async () => {
    const { container, findByText } = render(
      <StoreProvider>
        <GridView />
      </StoreProvider>,
    );

    expect(await findByText('iPhone 9')).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
