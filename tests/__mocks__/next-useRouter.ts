//@see: https://dev.to/peterlidee/how-to-mock-next-router-with-jest-3p6b

jest.mock('next/navigation', () => ({
  usePathname: () => '',
  useRouter() {
    return {
      route: '',
      pathname: '',
      query: '',
      asPath: '',
      back: jest.fn(),
      push: jest.fn(),
    };
  },
}));

module.exports = jest.requireMock('next/navigation');
