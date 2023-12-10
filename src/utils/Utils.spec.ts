import jwt from 'jsonwebtoken';
import { Utils } from './Utils';

describe('Class / Utils', () => {
  it('Should return null', () => {
    expect(Utils.isNull(null)).toBeTruthy();
    expect(Utils.isNull(undefined)).toBeTruthy();
  });

  it('Should not be a null when pass input', () => {
    expect(Utils.isNotNull({})).toBeTruthy();
    expect(Utils.isNotNull([])).toBeTruthy();
    expect(Utils.isNotNull(1)).toBeTruthy();
  });

  it('Should return an empty', () => {
    expect(Utils.isEmpty(null)).toBeTruthy();
    expect(Utils.isEmpty({})).toBeTruthy();
    expect(Utils.isEmpty([])).toBeTruthy();
  });

  it('Should not be an empty', () => {
    expect(Utils.isNotEmpty({ key: 'value' })).toBeTruthy();
    expect(Utils.isNotEmpty([1, 2, 3])).toBeTruthy();
  });

  it('Should be able to create a JWT', () => {
    const spySign = jest.spyOn(jwt, 'sign');

    spySign.mockImplementation(() => 'Bearer token');

    expect(Utils.getJWToken({ key: 'value' })).toEqual('Bearer token');
  });

  it('Should parse an amount correctly', () => {
    const usdAmount: string = Utils.parseAmountByCurrency(122, 'USD');
    const bgnAmount: string = Utils.parseAmountByCurrency(122, 'BGN');
    const eurAmount: string = Utils.parseAmountByCurrency(122, 'EUR');

    expect(usdAmount).toEqual('$122.00');
    expect(bgnAmount).toEqual('BGN 122.00');
    expect(eurAmount).toEqual('€122.00');
  });
});
