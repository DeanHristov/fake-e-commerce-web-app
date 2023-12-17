import { TCurrency } from '../types';

export class Utils {
  /**
   * @description Checking if the value not exists
   * @param {*} val
   * @return {boolean} True if the value doesn't exist otherwise false
   */
  public static isNull(val: any): boolean {
    return val === null || val === undefined || val === 0 || val === -1;
  }

  /**
   * @description Checking if the value exists
   * @param {*} val
   * @return {boolean} True if the value exist otherwise false
   */
  public static isNotNull(val: any): boolean {
    return val !== null && val !== undefined;
  }

  /**
   * @description Checking if the value exists
   * @param {*} val
   * @return {boolean} True if the array or object is empty otherwise false
   */
  public static isEmpty(val: any): boolean {
    if (Utils.isNull(val)) return true;

    if (!Array.isArray(val) && typeof val === 'object') {
      return Object.values(val).length === 0;
    }

    if (Array.isArray(val)) return val.length === 0;

    return true;
  }

  /**
   * @description Opposite on Utils.isEmpty(<any>)
   * @param {*} val
   * @return {boolean} True if not empty otherwise false
   */
  public static isNotEmpty(val: any): boolean {
    return !Utils.isEmpty(val);
  }

  /**
   * Converts a number to a string with a proper currency and amount format.
   * @param {number} amount An amount
   * @param {TCurrency} currency
   * @param {string} locale A locale string
   * @return string
   */
  public static parseAmountByCurrency(
    amount: number,
    currency: TCurrency,
    locale = 'en-US',
  ): string {
    return Math.abs(amount).toLocaleString(locale, {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  }

  public static calculateOldPrice(
    price: number,
    discountPercentage?: number,
  ): number {
    if (Utils.isNull(discountPercentage)) return price;

    const reminder: number = Math.round(
      (Math.round(discountPercentage!) * price) / 100,
    );

    return price + reminder;
  }

  public static parseMapToArrayOfValues<K, V>(map: Map<K, V>): V[] {
    return Array.from(map, ([_, value]) => value);
  }

  public static debounce(cb: (args?: any) => void, timeout = 300) {
    let timer: NodeJS.Timeout;

    return (args?: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => cb(args), timeout);
    };
  }

  public static tryToLoadFromStorage<T>(key: string, initialState: T): T {
    try {
      const serializedState = localStorage.getItem(key);

      if (!serializedState) return initialState;

      return JSON.parse(serializedState);
    } catch (err) {
      return initialState;
    }
  }
}
