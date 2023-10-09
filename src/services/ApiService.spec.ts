import APIService from './APIService';

const api: APIService = APIService.getInstance();
const spyFetch = jest.spyOn(global, 'fetch') as jest.Mock;

describe('Services / APIService', () => {
  beforeEach(spyFetch.mockReset);

  it('Should be able to perform a HTTP GET request successfully', async () => {
    const mockResponse = { status: 'Ok' };

    spyFetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      }),
    );

    const { data, error } = await api.fetch('/data');

    expect(data).toEqual(mockResponse);
    expect(error).toEqual(null);
  });

  it('Should not be able to perform a HTTP GET request successfully', async () => {
    spyFetch.mockImplementation(() =>
      Promise.reject({
        ok: false,
        statusText: 'Down',
      }),
    );

    const { data, error } = await api.fetch('/data');

    expect(data).toEqual(null);
    expect(error).toEqual('Down');
  });
});
