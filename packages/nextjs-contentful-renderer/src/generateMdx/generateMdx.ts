import { bundleMDX } from 'mdx-bundler';
import { Block, Model, PropsValue, breakpoints, replaceCmlPlaceholders } from '@cmpsr/cml';
import { merge } from 'lodash';
import remarkGfm from 'remark-gfm';

export const generateMdx = async (blocks: Block[], globalVariables: PropsValue = {}): Promise<Model[]> => {
  const promises = blocks.map(async ({ models, propsValues }) => {
    const mdxModelsUpdated = models.map((mdxModel, index) =>
      replaceCmlPlaceholders(mdxModel, merge({}, globalVariables, propsValues[index])),
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
  // .filter added to remove empty models, (ex. AiTextGenerator, but could be more in the future)
  // prevents site rendering from breaking when a model is empty
  return all.reduce((acc, val) => acc.concat(val), []).filter((model) => !!Object.keys(model).length);
};

const bundler = async (code: string): Promise<string> =>
  (
    await bundleMDX({
      source: code.trim(),
      mdxOptions: (options) => {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
        return options;
      },
    })
  ).code;
