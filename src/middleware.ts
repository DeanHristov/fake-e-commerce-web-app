import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { IUser, USER_ROLES } from './types';
import { APIUtils } from './utils/APIUtils';
import { Utils } from './utils/Utils';

// Adding routing restriction
export async function middleware({ nextUrl, cookies }: NextRequest) {
  const { pathname, origin } = nextUrl;
  const absoluteURL = new URL('/', origin);
  const bearerToken = cookies.get('token')?.value.split(' ')[1];
  const activeUser: IUser | undefined = await APIUtils.decodeJWToken<IUser>(
    bearerToken!,
  );
  const isLogedIn: boolean = Utils.isNotNull(activeUser);
  const shouldAvoidLogin = isLogedIn && pathname === '/login';
  const shouldAvoidProfile = !isLogedIn && pathname === '/profile';
  const shouldAvoidAdmin =
    (!activeUser || activeUser?.role !== USER_ROLES.ADMIN) &&
    pathname === '/admin';

  if (shouldAvoidLogin || shouldAvoidProfile || shouldAvoidAdmin)
    return NextResponse.redirect(absoluteURL.toString());

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login/:path*', '/profile/:path*'],
};
