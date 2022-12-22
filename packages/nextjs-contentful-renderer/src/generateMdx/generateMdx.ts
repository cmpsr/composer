import { bundleMDX } from 'mdx-bundler';
import { Block, Model, breakpoints, replaceCmlTemplates } from '@cmpsr/cml';

export const generateMdx = async (blocks: Block[]): Promise<Model[]> => {
  const promises = blocks.map(async ({ models, propsValues }) => {
    const mdxModelsUpdated = models.map((mdxModel, index) => replaceCmlTemplates(mdxModel, propsValues[index] || {}));

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

const bundler = async (code: string): Promise<string> => (await bundleMDX({ source: code.trim() })).code;
