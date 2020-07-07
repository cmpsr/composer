"use strict";

var _ = require(".");

describe('getVariantByQueryParams', () => {
  const ref = 'ref';
  const variants = [{
    id: 1,
    name: '1',
    traffic: 1
  }, {
    id: 2,
    name: '2',
    match: [{
      utm_option1: 'camp1'
    }],
    traffic: 0
  }, {
    id: 3,
    name: '3',
    match: [{
      utm_option2: 'camp2'
    }],
    traffic: 0
  }];
  it('should return second items for camp1 param', () => {
    const value = (0, _.getVariantByQueryParams)(ref, variants, {
      utm_option1: 'camp1'
    });
    expect(value).toBeDefined();
    expect(value.id).toBe(variants[1].id);
    expect(value.traffic).toBe(variants[1].traffic);
    expect(value.ref).toBe(ref);
    expect(value.match).toBe(variants[1].match);
  });
  it('should return second items for camp2 param', () => {
    const value = (0, _.getVariantByQueryParams)(ref, variants, {
      utm_option2: 'camp2'
    });
    expect(value).toBeDefined();
    expect(value.id).toBe(variants[2].id);
    expect(value.traffic).toBe(variants[2].traffic);
    expect(value.ref).toBe(ref);
    expect(value.match).toBe(variants[2].match);
  });
  it('should return first item if multiple matches', () => {
    const duplicatedMatchesVariants = variants.slice(0);
    duplicatedMatchesVariants.push({
      id: 4,
      name: '4',
      match: [{
        utm_option2: 'camp2'
      }],
      traffic: 0
    });
    const value = (0, _.getVariantByQueryParams)(ref, duplicatedMatchesVariants, {
      utm_option2: 'camp2'
    });
    expect(value).toBeDefined();
    expect(value.id).toBe(variants[2].id);
    expect(value.traffic).toBe(variants[2].traffic);
    expect(value.ref).toBe(ref);
    expect(value.match).toBe(variants[2].match);
  });
  it('should return undefined for invalid params', () => {
    const value = (0, _.getVariantByQueryParams)(ref, variants, {
      utm_option: 'camp'
    });
    expect(value).not.toBeDefined();
  });
});