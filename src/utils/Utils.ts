import jwt, { Secret } from 'jsonwebtoken';
import { TCurrency } from '../types';

export class Utils {
  /**
   * @description Checking if the value not exists
   * @param {*} val
   * @return {boolean} True if the value doesn't exist otherwise false
   */
  public static isNull(val: any): boolean {
    return val === null || val === undefined || val === -1;
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
   * @description  Creating a new JWT. The default life is 10m
   * @param { string | Buffer | object } payload
   * @return JWT as string
   */
  public static getJWToken(payload: string | Buffer | object): string {
    const { JWT_SECRET, JWT_EXPIRE } = process.env;

    return jwt.sign(payload, JWT_SECRET as Secret, {
      expiresIn: JWT_EXPIRE,
    });
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
    discountPercentage: number,
    currency?: TCurrency,
  ): number | string {
    const reminder: number = (discountPercentage * price) / 100;
    const oldPrice: number = price + reminder;

    if (Utils.isNotNull(currency)) {
      return Utils.parseAmountByCurrency(oldPrice, currency!);
    }

    return oldPrice;
  }
}
