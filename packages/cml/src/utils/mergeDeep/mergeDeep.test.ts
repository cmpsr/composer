import { mergeDeep } from './mergeDeep';

describe('mergeDeep', () => {
  test('should merge objects', () => {
    const merged = mergeDeep({ a: 'a' }, { b: 'b' });
    expect(merged).toStrictEqual({ a: 'a', b: 'b' });
  });
  test('should merge nested objects', () => {
    const merged = mergeDeep({ a: { a: 'a' } }, { a: { b: 'b' } });
    expect(merged).toStrictEqual({ a: { a: 'a', b: 'b' } });
  });
  test('should replace values', () => {
    const merged = mergeDeep({ a: 'b' }, { a: 'a' });
    expect(merged).toStrictEqual({ a: 'a' });
  });
  test('should replace values in nested objects', () => {
    const merged = mergeDeep({ a: 'a', b: { b1: 'b1', b2: 'c' } }, { b: { b2: 'b2' } });
    expect(merged).toStrictEqual({ a: 'a', b: { b1: 'b1', b2: 'b2' } });
  });
});
