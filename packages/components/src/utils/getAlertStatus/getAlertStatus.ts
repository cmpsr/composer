type CmpsrAlertStatus = 'success' | 'error' | 'warning' | 'inform';
type ChakraAlertStatus = 'success' | 'error' | 'warning' | 'info';

export const getAlertStatus = (status: ChakraAlertStatus): CmpsrAlertStatus =>
  status === 'info' ? 'inform' : status;

export const getAlertChakraStatus = (
  status: CmpsrAlertStatus
): ChakraAlertStatus => (status === 'inform' ? 'info' : status);
