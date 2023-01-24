import { useSignalwireSms } from '.';
import { SignalwireSms } from '.';

jest.mock('@signalwire/realtime-api', () => ({
  Messaging: {
    Client: function () {
      return {};
    },
  },
}));

describe('index', () => {
  test('should create plain instance', () => {
    const signalwireSms = useSignalwireSms();
    expect(signalwireSms).toBeInstanceOf(SignalwireSms);
  });
});
