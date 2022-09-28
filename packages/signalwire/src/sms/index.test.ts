import { useSignalwireSms } from '.';
import { SignalwireSms } from '.';
jest.mock('@signalwire/realtime-api');

describe('index', () => {
  test('should create plain instance', () => {
    const twilioSms = useSignalwireSms();
    expect(twilioSms).toBeInstanceOf(SignalwireSms);
  });
});
