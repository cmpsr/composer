import { getRgxInstance } from '../getRgxInstance';
import { breakpoints, Model, PropsValue, ResponsiveValue } from '../types';
import { mergeDeep } from '../utils/mergeDeep';
import { replaceAll } from '../utils/replaceAll';

export const replaceCmlPlaceholders = (model: Model, values: PropsValue): Model =>
  breakpoints.reduce((acc, breakpoint) => {
    if (model[breakpoint] || values[breakpoint]) {
      return {
        ...acc,
        [breakpoint]: replacePropValues(getBreakpointValue(model, breakpoint), mergeValues(values, breakpoint)),
      };
    } else {
      return acc;
    }
  }, {});

const replacePropValues = (mdx: string, values: Record<string, string> = {}): string => {
  if (!mdx) return '';
  let mdxCopy = mdx;
  const instanceToGetAllMatches = getRgxInstance();
  const matches = mdxCopy.match(instanceToGetAllMatches) || [];

  if (matches.length === 0) return mdx;

  const uniqueMatches = Array.from(new Set(matches));

  uniqueMatches.forEach((match) => {
    const patternToGetRgxGroups = getRgxInstance();
    const rgxGroups = patternToGetRgxGroups.exec(match) || [];
    const propName = rgxGroups[1];
    const fieldType = rgxGroups[2];
    const defaultValue = rgxGroups[6] || '';

    const propValue = values[propName];
    let newValue = propValue ? propValue : defaultValue;

    let searchValue: string;
    switch (fieldType) {
      case 'AiTextGenerator':
        searchValue = match;
        newValue = '';
        break;
      case 'AccordionsGallery':
      case 'Action':
      case 'Actions':
      case 'Bullets':
      case 'Carousel':
      case 'Column':
      case 'Columns':
      case 'Container':
      case 'Icon':
      case 'Image':
      case 'Images':
      case 'MediaBlock':
      case 'Tag':
      case 'Text':
      case 'TextPairing':
        searchValue = match;
        if (newValue === 'undefined' || propValue === undefined) {
          newValue = '';
        } else {
          newValue = renderComponent(defaultValue, propValue);
        }
        break;
      case 'BoxProps':
      case 'FlexProps':
        searchValue = match;
        if (typeof newValue === 'object') {
          newValue = flatObject(newValue);
        }
        break;
      case 'styling':
        searchValue = match;
        newValue = applyStyling(newValue, rgxGroups[5]);
        break;
      case 'boolean':
      case 'number':
        searchValue = match;
        newValue = `{${propValue ?? defaultValue}}`;
        break;
      case 'json':
        searchValue = match;

        if (propValue && typeof propValue === 'object') {
          newValue = `{${JSON.stringify(propValue)}}`;
        } else {
          newValue = `{${propValue}}`;
        }

        break;
      case 'list':
        searchValue = match;
        break;
      case 'ENV_VAR':
        searchValue = match;
        newValue = process.env[propName];
        break;
      case 'MultiInput':
        searchValue = match;

        if (typeof propValue === 'string') {
          newValue = `{["${propValue}"]}`;
        } else {
          newValue = `{[${(propValue as string[])?.map((value) => `"${value}"`).join(',')}]}`;
        }
      default:
        searchValue = match;
    }

    mdxCopy = replaceAll(searchValue, newValue)(mdxCopy);
  });
  return replacePropValues(mdxCopy, values);
};

const renderComponent = (componentName: string, props: Record<string, unknown> | string): string => {
  if (typeof props === 'string') {
    return `<${componentName} ${props}/>`;
  }
  const { children, ...rest } = props;
  const props1 = flatObject(rest);
  const child = Array.isArray(children) ? children.join('') : children;
  return children ? `<${componentName} ${props1}>${child}</${componentName}>` : `<${componentName} ${props1}/>`;
};

const flatObject = (obj: Record<string, any>): string => {
  let result = '';
  for (const [key, value] of Object.entries(obj)) {
    const patternToGetRgxGroups = getRgxInstance();
    const isReplaceableValue =
      typeof value === 'boolean' || typeof value === 'number' || !!patternToGetRgxGroups.exec(value);
    const wrapper = isReplaceableValue ? '{' : '"';
    const endWrapper = isReplaceableValue ? ' }' : '"';
    result += `${key}=${wrapper}${value}${endWrapper} `;
  }
  return result.trimEnd();
};

const applyStyling = (text: string, stylesStr: string): string => {
  const styles = stylesStr.split(',');
  const styleWithValue: string = styles
    .reduce((prev, curr) => {
      const [prop, value] = curr.split('=');
      return prev.concat(` ${prop}="${value}"`);
    }, '')
    .trim();
  return `<Text as="span" variant="inherited" ${styleWithValue}>${text}</Text>`;
};

const getBreakpointValue = <T>(values: ResponsiveValue<T>, breakpoint: string) => {
  if (values[breakpoint]) return values[breakpoint];
  const index = breakpoints.indexOf(breakpoint);
  if (index === -1) return undefined;
  if (index === 0) return values.base;
  return getBreakpointValue(values, breakpoints[index - 1]);
};

const mergeValues = <T>(values: ResponsiveValue<T>, breakpoint: string) => {
  let merged = values.base || {};
  const index = breakpoints.indexOf(breakpoint);
  if (index === -1) return undefined;
  for (let i = 1; i <= index; i++) {
    const currentValue = values[breakpoints[i]];
    if (currentValue) {
      merged = mergeDeep(merged, currentValue);
    }
  }
  return merged;
};
