jest.mock('jose', () => ({
  // ...jest.requireActual('jose'),
  jwtVerify: jest.fn(),
}));

module.exports = jest.requireMock('jose');
