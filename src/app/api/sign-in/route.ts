import { APIUtils } from '@/utils/APIUtils';
import ms from 'ms';
import { NextRequest, NextResponse } from 'next/server';

export interface ISignInResponse {
  status?: string;
  error?: string;
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const {
    statusCode,
    error,
    data: token,
  } = await APIUtils.fetch(`${process.env.API_URL}/auth/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (statusCode === 400 || error) {
    return NextResponse.json<ISignInResponse>(
      { error },
      { status: statusCode },
    );
  }

  const response = NextResponse.json<ISignInResponse>(
    { status: 'Ok!' },
    { status: 200 },
  );
  response.cookies.set({
    name: 'token',
    value: token,
    httpOnly: true,
    maxAge: ms(process.env.JWT_EXPIRE as string),
  });

  return response;
}
