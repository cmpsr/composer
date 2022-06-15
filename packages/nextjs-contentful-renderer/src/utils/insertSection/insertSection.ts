import { Block, Section } from '../contentful/getPageById/types';

export const insertSection = (originalContent: Block[], section: Section, method: 'unshift' | 'push') => {
  if (!section) return originalContent;

  const content = Array.from(originalContent || []);
  const sectionBlock = convertSectionToBlock(section);
  content[method](sectionBlock);
  return content;
};

const convertSectionToBlock = (section: Section) => ({ models: [section.model || {}], propsValues: [] });
