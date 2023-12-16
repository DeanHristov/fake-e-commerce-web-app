jest.mock('react-redux', () => ({
  // ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
  useStore: jest.fn(),
}));

module.exports = jest.requireMock('react-redux');
