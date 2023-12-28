import { APIUtils } from '@/utils/APIUtils';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const response = NextResponse.json({ status: 'Ok!' });
  const { cookies } = response;

  await APIUtils.fetch(`${process.env.API_URL}/auth/sign-out`);

  cookies.delete('token');

  return response;
}
