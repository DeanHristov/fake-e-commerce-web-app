// import { SignJWT } from 'jose';
import { jwtVerify, JWTVerifyResult } from 'jose';

export class APIUtils {
  /**
   * @description  Does REST-based API request
   * @see: https://nextjs.org/docs/app/api-reference/functions/fetch
   * @param { string  } path
   * @param { object  } options
   * @return JWT as string
   */
  public static async fetch<T>(path: string, options?: RequestInit) {
    try {
      const response = await fetch(path, options);
      const data = await response.json();
      return await { ...data, statusCode: response.status };
    } catch (reason) {
      return { error: 'Failed to fetch data!' };
    }
  }

  /**
   * @description  Creating a new JWT. The default life time is 10m
   * @see https://github.com/panva/jose/blob/HEAD/docs/classes/jwt_sign.SignJWT.md
   * @param { string | Buffer | object } payload
   * @return JWT as string
   */
  // public static async encodeJWToken(payload: object): Promise<string> {
  //   const alg = 'HS256';
  //   const { JWT_SECRET, JWT_EXPIRE } = process.env;
  //   const secret: Uint8Array = new TextEncoder().encode(JWT_SECRET);
  //   return await new SignJWT({ ...payload })
  //     .setProtectedHeader({ alg })
  //     .setExpirationTime(JWT_EXPIRE!)
  //     .sign(secret);
  // }

  /**
   * @description  Validating JWT. If it is valid, will return the payload otherwise "undefined".
   * @see: https://github.com/panva/jose/blob/HEAD/docs/functions/jwt_verify.jwtVerify.md
   * @param { string } token A JWT token
   * @return object | undefined
   */
  public static async decodeJWToken<T>(token: string): Promise<T | undefined> {
    const { JWT_SECRET } = process.env;

    try {
      const secret: Uint8Array = new TextEncoder().encode(JWT_SECRET);
      const { payload }: JWTVerifyResult<T> = await jwtVerify(token, secret);

      return payload;
    } catch (reason) {
      //TODO The token is not valid/missing! Do something!
      console.log('Invalid token!');
      return;
    }
  }
}
