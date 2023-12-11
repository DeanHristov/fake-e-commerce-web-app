import jwt from 'jsonwebtoken';
import { APIUtils } from '@/utils/APIUtils';

describe('Class / APIUtils', () => {
  it('Should be able to create a JWT', () => {
    const spySign = jest.spyOn(jwt, 'sign');

    spySign.mockImplementation(() => 'Bearer token');

    expect(APIUtils.getJWToken({ key: 'value' })).toEqual('Bearer token');
  });
});
