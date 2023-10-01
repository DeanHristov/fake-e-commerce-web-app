import {
  MockedRequest,
  rest,
  RestContext,
  RestHandler,
  RestRequest,
} from 'msw';
import mockedUsers from '@mocks/data/users';
import { IUser } from '../../types';

const userHandlers: RestHandler<MockedRequest<IUser>>[] = [
  // Fetching the all users
  rest.get(
    `${process.env.API_URL}/users`,
    (req: RestRequest, res, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json(mockedUsers));
    },
  ),
];

export default userHandlers;
