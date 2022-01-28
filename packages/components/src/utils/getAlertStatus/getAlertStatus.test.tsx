import { getAlertStatus, getAlertChakraStatus } from '.';

const commonStatuses: any = ['warning', 'success', 'error'];
describe('getAlertStatus', () => {
  test('should return inform if info is provided', () => {
    const status = getAlertStatus('info');
    expect(status).toBe('inform');
  });

  test.each(commonStatuses)(
    'should return provided status if not info',
    (s) => {
      const status = getAlertStatus(s);
      expect(status).toBe(s);
    }
  );
});

describe('getAlertChakraStatus', () => {
  test('should return info if inform is provided', () => {
    const status = getAlertChakraStatus('inform');
    expect(status).toBe('info');
  });

  test.each(commonStatuses)(
    'should return provided status if not info',
    (s) => {
      const status = getAlertChakraStatus(s);
      expect(status).toBe(s);
    }
  );
});
