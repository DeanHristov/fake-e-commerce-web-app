import jwt, { Secret } from 'jsonwebtoken';

export class APIUtils {
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
   * @description
   * @param none
   * @return
   */
  public static interceptAPICalls() {
    // @see: https://github.com/mswjs/msw/issues/1340
    // Including mocks
    const isMocking: boolean =
      process.env.NODE_ENV !== 'test' &&
      process.env.NODE_ENV === 'development' &&
      Boolean(process.env.API_MOCKING) &&
      process.env.API_MOCKING === 'true';

    if (isMocking) require('@/mocks');
  }

  /**
   * @description
   * @param
   * @return
   */
  public static async fetch(route: string) {
    const response = await fetch(`${process.env.API_URL}${route}`, {
      cache: 'no-cache',
    });

    if (!response.ok) {
      return response.statusText;
    }

    return await response.json();
  }
}
