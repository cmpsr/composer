import { getRgxInstance } from './getRgxInstance';

describe('getRgxInstance', () => {
  it('should return null if no match', () => {
    const placeholder = 'foo';
    const match = getRgxInstance().exec(placeholder);

    expect(match).toBeNull();
  });

  it('should extract propName and fieldType', () => {
    const placeholder = '{{foo:string}}';
    const match = getRgxInstance().exec(placeholder);

    expect(match).not.toBeNull();

    const [, propName, roleIds, propType, values, extraProps, parentComponent] = match!;

    expect(propName).toBe('foo');
    expect(roleIds).toBeUndefined();
    expect(propType).toBe('string');
    expect(values).toBeUndefined();
    expect(extraProps).toBeUndefined();
    expect(parentComponent).toBeUndefined();
  });

  it('should extract propName, fieldType and defaultValue', () => {
    const placeholder = '{{foo:number:3}}';
    const match = getRgxInstance().exec(placeholder);

    expect(match).not.toBeNull();

    const [, propName, roleIds, propType, values, extraProps, defaultValue] = match!;

    expect(propName).toBe('foo');
    expect(roleIds).toBeUndefined();
    expect(propType).toBe('number');
    expect(values).toBeUndefined();
    expect(extraProps).toBeUndefined();
    expect(defaultValue).toBe('3');
  });

  it('should extract propName, roleIds, fieldType and defaultValue', () => {
    const placeholder = '{{foo[1,2,3]:number:3}}';
    const match = getRgxInstance().exec(placeholder);

    expect(match).not.toBeNull();

    const [, propName, roleIds, propType, values, extraProps, defaultValue] = match!;

    expect(propName).toBe('foo');
    expect(roleIds).toBe('1,2,3');
    expect(propType).toBe('number');
    expect(values).toBeUndefined();
    expect(extraProps).toBeUndefined();
    expect(defaultValue).toBe('3');
  });

  it('should extract propName, fieldType and values', () => {
    const placeholder = '{{foo:list(1|2|3):2}}';
    const match = getRgxInstance().exec(placeholder);

    expect(match).not.toBeNull();

    const [, propName, roleIds, propType, values, extraProps, defaultValue] = match!;

    expect(propName).toBe('foo');
    expect(roleIds).toBeUndefined();
    expect(propType).toBe('list');
    expect(values).toBe('1|2|3');
    expect(extraProps).toBeUndefined();
    expect(defaultValue).toBe('2');
  });

  it('should extract propName, fieldType and parentComponent', () => {
    const placeholder = '{{foo:FlexProps:Flex}}';
    const match = getRgxInstance().exec(placeholder);

    expect(match).not.toBeNull();

    const [, propName, roleIds, propType, values, extraProps, parentComponent] = match!;

    expect(propName).toBe('foo');
    expect(roleIds).toBeUndefined();
    expect(propType).toBe('FlexProps');
    expect(values).toBeUndefined();
    expect(extraProps).toBeUndefined();
    expect(parentComponent).toBe('Flex');
  });

  it('should extract propName, fieldType, parentComponent and extraProps', () => {
    const placeholder = '{{foo:FlexProps[extraPropKey=extraPropValue]:Flex}}';
    const match = getRgxInstance().exec(placeholder);

    expect(match).not.toBeNull();

    const [, propName, roleIds, propType, values, extraProps, parentComponent] = match!;

    expect(propName).toBe('foo');
    expect(roleIds).toBeUndefined();
    expect(propType).toBe('FlexProps');
    expect(values).toBeUndefined();
    expect(extraProps).toBe('extraPropKey=extraPropValue');
    expect(parentComponent).toBe('Flex');
  });

  it('should extract propName, fieldType, styling and defaultValue', () => {
    const placeholder = '{{_:styling[color=foo]:default value}}';
    const match = getRgxInstance().exec(placeholder);

    expect(match).not.toBeNull();

    const [, propName, roleIds, propType, values, styling, defaultValue] = match!;

    expect(propName).toBe('_');
    expect(roleIds).toBeUndefined();
    expect(propType).toBe('styling');
    expect(values).toBeUndefined();
    expect(styling).toBe('color=foo');
    expect(defaultValue).toBe('default value');
  });
});
