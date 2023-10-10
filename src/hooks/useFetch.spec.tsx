import { act, renderHook } from '@testing-library/react';
import useFetch from './useFetch';

const spyFetch = jest.spyOn(global, 'fetch') as jest.Mock;

describe('Hooks / useFetch', () => {
  beforeEach(spyFetch.mockReset);

  it('Should call the hook with an initial state', async () => {
    spyFetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      }),
    );

    const { result } = renderHook(() => useFetch('/data'));

    await act(() => {
      expect(result.current.data).toBeFalsy();
      expect(result.current.error).toBeFalsy();
      expect(result.current.loading).toBeTruthy();
    });
  });

  it('Should be able to perform a HTTP GET request successfully', async () => {
    const data: number[] = [1, 2, 3];

    spyFetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data }),
      }),
    );

    const { result } = renderHook(() => useFetch('/data'));

    await act(() => {});

    await act(() => {
      expect(result.current.data).toMatchObject({ data: [1, 2, 3] });
      expect(result.current.loading).toBeFalsy();
      expect(result.current.error).toBeFalsy();
    });
  });
});
