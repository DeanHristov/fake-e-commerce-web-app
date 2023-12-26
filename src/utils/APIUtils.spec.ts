import { server } from '@/mocks/server';
import { jwtVerify } from 'jose';
import { RestContext, rest } from 'msw';
import { APIUtils } from './APIUtils';

// --runInBand
const mockJWTVerify = jwtVerify as jest.Mock;

describe('Class / APIUtils', () => {
  describe('Encode/decode JWT', () => {
    afterEach(() => mockJWTVerify.mockRestore());

    it('Should be able to decode JWT successfully', async () => {
      mockJWTVerify.mockImplementation(() => ({ payload: { verified: true } }));
      const result: { verified: boolean } | undefined =
        await APIUtils.decodeJWToken<{
          verified: boolean;
        }>('token');

      expect(result).toEqual({ verified: true });
    });

    it('Should be able to throw an error during decoding JWT token', async () => {
      mockJWTVerify.mockImplementation(() => {
        throw new Error();
      });
      const result: { verified: boolean } | undefined =
        await APIUtils.decodeJWToken<{
          verified: boolean;
        }>('token');

      expect(result).toBeFalsy();
    });

    it.skip('Should be able to encode JWT', () => {});
  });

  describe('API Requests', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('Should be able to run API Request successfully', async () => {
      const responsePayload = {
        data: { id: 1, name: 'just a name' },
      };
      server.use(
        rest.get('/path-to-resource', (_, res, ctx: RestContext) => {
          return res(ctx.status(200), ctx.json(responsePayload));
        }),
      );

      expect(await APIUtils.fetch('/path-to-resource')).toEqual({
        statusCode: 200,
        ...responsePayload,
      });
    });

    it('Should be able to handle statusCode=400 in an API Request', async () => {
      const responsePayload = { error: 'Bad Request' };
      server.use(
        rest.get('/path-to-resource', (_, res, ctx: RestContext) => {
          return res(ctx.status(400), ctx.json(responsePayload));
        }),
      );

      expect(await APIUtils.fetch('/path-to-resource')).toEqual({
        statusCode: 400,
        ...responsePayload,
      });
    });

    it('Should be able to return a "silent" error when a problem with an internet occurrence', async () => {
      jest.spyOn(global, 'fetch').mockImplementation(async () => {
        throw new Error('Some error!');
      });

      expect(await APIUtils.fetch('/path-to-resource')).toEqual({
        error: 'Failed to fetch data!',
      });
    });
  });
});
