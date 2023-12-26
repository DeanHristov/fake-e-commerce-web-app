import { Utils } from './Utils';

jest.useFakeTimers();

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args: string[]) => mockGetItem(...args),
    setItem: (...args: string[]) => mockSetItem(...args),
  },
});

describe('Class / Utils', () => {
  it('Should return null', () => {
    expect(Utils.isNull(null)).toBeTruthy();
    expect(Utils.isNull(undefined)).toBeTruthy();
    expect(Utils.isNull(-1)).toBeTruthy();
  });

  it('Should not be a null when pass input', () => {
    expect(Utils.isNotNull({})).toBeTruthy();
    expect(Utils.isNotNull([])).toBeTruthy();
    expect(Utils.isNotNull(1)).toBeTruthy();
    expect(Utils.isNotNull(false)).toBeTruthy();
  });

  it('Should return an empty', () => {
    expect(Utils.isEmpty(null)).toBeTruthy();
    expect(Utils.isEmpty(undefined)).toBeTruthy();
    expect(Utils.isEmpty({})).toBeTruthy();
    expect(Utils.isEmpty([])).toBeTruthy();
  });

  it('Should not be an empty', () => {
    expect(Utils.isNotEmpty({ key: 'value' })).toBeTruthy();
    expect(Utils.isNotEmpty([1, 2, 3])).toBeTruthy();
  });

  it('Should parse an amount correctly', () => {
    const usdAmount: string = Utils.parseAmountByCurrency(122, 'USD');
    const bgnAmount: string = Utils.parseAmountByCurrency(122, 'BGN');
    const eurAmount: string = Utils.parseAmountByCurrency(122, 'EUR');

    expect(usdAmount).toEqual('$122.00');
    expect(bgnAmount).toEqual('BGN 122.00');
    expect(eurAmount).toEqual('€122.00');
  });

  it('Should be able to call the function after 300ms', () => {
    const mockCallback = jest.fn();
    const fakeDebounce = Utils.debounce(mockCallback);

    fakeDebounce();

    jest.runAllTimers();
    expect(mockCallback).toHaveBeenCalled();
  });

  it('Should be able to call the function after 300ms with args', () => {
    const mockCallback = jest.fn();
    const fakeDebounce = Utils.debounce(mockCallback);

    fakeDebounce({ args: [1, 2] });

    jest.runAllTimers();
    expect(mockCallback).toHaveBeenCalledWith({ args: [1, 2] });
  });

  it('Should be able to return searchable value from the localstorage', () => {
    const inputStore = { args: 1 };

    mockGetItem.mockReturnValue(JSON.stringify(inputStore));

    const outputStore = Utils.tryToLoadFromStorage<any>('key', []);

    expect(outputStore).toEqual(inputStore);
  });

  it("Should be able to return a default value in case where it can't find the key", () => {
    const inputStore: any[] = [];

    mockGetItem.mockReturnValue(null);

    const outputStore = Utils.tryToLoadFromStorage<any>('another key', []);

    expect(outputStore).toEqual(inputStore);
  });

  it("Should be able to return the initial state if it throw a 'silent' error", () => {
    const initialState: any[] = [];

    mockGetItem.mockImplementation(() => {
      throw new Error();
    });

    const outputStore = Utils.tryToLoadFromStorage<any>(
      'another key',
      initialState,
    );

    expect(outputStore).toEqual(initialState);
  });

  it('Should be able to parse map to array of values', () => {
    const testMap: Map<string, number> = new Map();

    testMap.set('1', 1);
    testMap.set('2', 2);
    testMap.set('3', 3);

    expect(Utils.parseMapToArrayOfValues(testMap)).toEqual([1, 2, 3]);
  });
});
