import { FastlyABAllocations } from 'types/FastlyABAllocations';

export const getFastlyABAllocationsFromHeader = (
  header: string
): FastlyABAllocations => {
  const base64Tests = Buffer.from(header, 'base64').toString('utf8');
  return JSON.parse(base64Tests);
};
