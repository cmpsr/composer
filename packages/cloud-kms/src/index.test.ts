import useKMS from '.';
import { Kms } from './Kms';

describe('useKMS', () => {
  it('should return Kms instance', () => {
    const kms = useKMS({ keyRingId: 'key_ring_id' });
    expect(kms).toBeInstanceOf(Kms);
  });
});
