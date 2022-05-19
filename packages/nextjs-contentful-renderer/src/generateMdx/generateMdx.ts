import { bundleMDX } from 'mdx-bundler';
import { replaceAll } from '../utils/replaceAll';
import { Block, Model, PropsValue, ResponsiveValue } from '../utils/contentful/getPageById/types';

const breakpoints = ['base', 'md', 'lg', 'xl', 'xxl'];
const defaultBreakpointValues: Model = breakpoints.reduce((acc, curr) => ((acc[curr] = ''), acc), {});

export const generateMdx = async (blocks: Block[]): Promise<Model[]> => {
  const promises = blocks.map(async ({ models, propsValues }) => {
    const filledModels = fillMissingBreakpoints(models, '');
    const filledProps = fillMissingBreakpoints(propsValues, {});
    const mdxModelsUpdated = filledModels.map((mdxModel, index) =>
      replaceValuesByBreakpoint(mdxModel, filledProps[index] || {})
    );

    const bundled = combineModels(mdxModelsUpdated);
    for (const breakpoint of breakpoints) {
      bundled[breakpoint] = await bundler(bundled[breakpoint]);
    }
    return bundled;
  });

  return await Promise.all(promises);
};

const fillMissingBreakpoints = <T>(values: ResponsiveValue<T>[], defaultValue: T): ResponsiveValue<T>[] =>
  values.map((value) => {
    const transformed: ResponsiveValue<T> = {
      base: value.base || defaultValue,
    };
    breakpoints.forEach((breakpoint, index) => {
      transformed[breakpoint] = value[breakpoint] || transformed[breakpoints[index - 1]];
    });
    return transformed;
  });

const replaceValuesByBreakpoint = (mdxModel: Model, values: PropsValue): Model =>
  breakpoints.reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: replacePropValues(mdxModel[breakpoint], values[breakpoint]),
    }),
    {}
  );

const combineModels = (models: Model[]): Model =>
  models.reduce(
    (model, item) => ({
      base: model.base += item.base,
      md: model.md += item.md,
      lg: model.lg += item.lg,
      xl: model.xl += item.xl,
      xxl: model.xxl += item.xxl,
    }),
    { ...defaultBreakpointValues }
  );

const bundler = async (code: string): Promise<string> => (await bundleMDX({ source: code.trim() })).code;

export const getRgxInstance = () => new RegExp('{{(\\w+):(\\w+)(?:\\((.+)(?=\\|)?\\))?(?::(.+))?}}', 'g');

const replacePropValues = (mdx: string, values: Record<string, string> = {}): string => {
  if (!mdx) return '';
  let mdxCopy = mdx;
  const instanceToGetAllMatches = getRgxInstance();
  const matches = mdxCopy.match(instanceToGetAllMatches) || [];

  const uniqueMatches = Array.from(new Set(matches));

  uniqueMatches.forEach((match) => {
    const patternToGetRgxGroups = getRgxInstance();
    const rgxGroups = patternToGetRgxGroups.exec(match) || [];
    const propName = rgxGroups[1];
    const defaultValue = rgxGroups[4] || '';

    const propValue = values[propName];
    const newValue = propValue ? propValue : defaultValue;
    mdxCopy = replaceAll(match, newValue)(mdxCopy);
  });
  return mdxCopy;
};
