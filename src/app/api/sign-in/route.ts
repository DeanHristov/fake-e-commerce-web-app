import bcryptjs from 'bcryptjs';
import ms from 'ms';

import { NextRequest, NextResponse } from 'next/server';
import { Utils } from '../../../utils/Utils';
// TODO Replace the way how retrieve the users - Use some fake DB!
import users from '../../../mocks/data/users';

export interface ISignInResponse {
  status: string;
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // TODO Replace the way how finding the user!
  const userIdx = users.findIndex((item) => item.email === email);
  const unauthorizedResponse = NextResponse.json<ISignInResponse>(
    { status: 'Unauthorized' },
    { status: 401 },
  );

  const response = NextResponse.json<ISignInResponse>(
    { status: 'Ok!' },
    { status: 200 },
  );

  if (Utils.isNull(users[userIdx])) return unauthorizedResponse;

  const currentUser = users[userIdx];
  const isPasswordMatch: boolean = bcryptjs.compareSync(
    password,
    currentUser.password,
  );

  if (!isPasswordMatch) return unauthorizedResponse;

  const token: string = Utils.getJWToken(currentUser);
  response.cookies.set({
    name: 'token',
    value: `Bearer ${token}`,
    httpOnly: true,
    maxAge: ms(process.env.JWT_EXPIRE as string),
  });
  return response;
}
