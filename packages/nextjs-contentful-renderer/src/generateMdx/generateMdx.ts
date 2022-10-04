import { bundleMDX } from 'mdx-bundler';
import { replaceAll } from '../utils/replaceAll';
import { Block, Model, PropsValue, ResponsiveValue } from '../utils/contentful/getPageById/types';

const breakpoints = ['base', 'md', 'lg', 'xl', 'xxl'];

export const generateMdx = async (blocks: Block[]): Promise<Model[]> => {
  const promises = blocks.map(async ({ models, propsValues }) => {
    const mdxModelsUpdated = models.map((mdxModel, index) =>
      replaceValuesByBreakpoint(mdxModel, propsValues[index] || {})
    );

    const bundledModels = mdxModelsUpdated.map(async (model) => {
      const bundled: Model = {};
      for await (const breakpoint of breakpoints) {
        if (model[breakpoint]) {
          bundled[breakpoint] = await bundler(model[breakpoint]);
        }
      }
      return bundled;
    });
    return Promise.all(bundledModels);
  });

  const all = await Promise.all(promises);
  return all.reduce((acc, val) => acc.concat(val), []);
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
      merged = { ...merged, ...currentValue };
    }
  }
  return merged;
};

const replaceValuesByBreakpoint = (mdxModel: Model, values: PropsValue): Model =>
  breakpoints.reduce((acc, breakpoint) => {
    if (mdxModel[breakpoint] || values[breakpoint]) {
      return {
        ...acc,
        [breakpoint]: replacePropValues(getBreakpointValue(mdxModel, breakpoint), mergeValues(values, breakpoint)),
      };
    } else {
      return acc;
    }
  }, {});

const bundler = async (code: string): Promise<string> => (await bundleMDX({ source: code.trim() })).code;

export const getRgxInstance = () => new RegExp('{{(\\w+):(\\w+)(?:\\((.+)(?=\\|)?\\))?(?::([^}}]*))?}}', 'g');

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
    const listPattern = rgxGroups[3];
    const defaultValue = rgxGroups[4] || '';

    const propValue = values[propName];
    let newValue = propValue ? propValue : defaultValue;

    let searchValue: string;
    switch (fieldType) {
      case 'Action':
      case 'Actions':
      case 'Container':
      case 'Icon':
      case 'Text':
      case 'TextPairing':
        searchValue = match;
        if (newValue === 'undefined' || propValue === undefined) {
          newValue = '';
        } else {
          newValue = renderComponent(defaultValue, propValue);
        }
        break;
      case 'ContainerProps':
        searchValue = match;
        if (typeof newValue === 'object') {
          newValue = flatObject(newValue);
        }
        break;
      case 'list':
        searchValue = listPattern ? escapeCharactersInListPattern(match) : match;
        break;
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
  const child = Array.isArray(children) ? children.join('\n') : children;
  return children ? `<${componentName} ${props1}>${child}</${componentName}>` : `<${componentName} ${props1}/>`;
};

const flatObject = (obj: Record<string, any>): string => {
  let result = '';
  for (const [key, value] of Object.entries(obj)) {
    const patternToGetRgxGroups = getRgxInstance();
    const isReplaceableValue = !!patternToGetRgxGroups.exec(value);
    const wrapper = isReplaceableValue ? '{' : '"';
    const endWrapper = isReplaceableValue ? ' }' : '"';
    result += `${key}=${wrapper}${value}${endWrapper} `;
  }
  return result;
};

// Escape characters (, ), | to \\(, \\), \\|
const escapeCharactersInListPattern = (match: string) =>
  replaceAll('\\|', '\\|')(match.replace('(', '\\(').replace(')', '\\)'));
