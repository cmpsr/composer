import { isCollectionShape } from './isCollectionShape';

describe('utils - isCollectionShape', () => {
  it('returns true for a valid collection object', () => {
    expect(isCollectionShape({ itemCollection: { items: [] } })).toBeTruthy();
  });

  it('returns false if collection key is invalid', () => {
    expect(isCollectionShape({ itemItems: { items: [] } })).toBeFalsy();
  });

  it('returns false if collection property does not contain an items property', () => {
    expect(isCollectionShape({ itemCollection: { notItems: [] } })).toBeFalsy();
  });

  it('returns false if items property is not an array', () => {
    expect(isCollectionShape({ itemCollection: { items: {} } })).toBeFalsy();
  });
});
