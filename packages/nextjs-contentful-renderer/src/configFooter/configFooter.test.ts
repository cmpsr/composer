import { configFooter } from '.';

const dummyContent = [
  {
    models: [{ base: '# H1' }, { base: '## H2' }],
    propsValues: [],
  },
];

const dummyPageContent = {
  content: dummyContent,
};

const mockInsertSection = jest.fn();

jest.mock('../utils/insertSection', () => ({
  insertSection: (...params) => mockInsertSection(...params),
}));

describe('configFooter', () => {
  test('should be called without footer', () => {
    configFooter(dummyPageContent);
    expect(mockInsertSection).toBeCalledTimes(1);
    expect(mockInsertSection).toHaveBeenCalledWith(dummyContent, undefined, 'push');
  });

  test('should be called with footer', () => {
    const footer = { model: {} };
    configFooter({ ...dummyPageContent, footer });
    expect(mockInsertSection).toBeCalledTimes(1);
    expect(mockInsertSection).toHaveBeenCalledWith(dummyContent, footer, 'push');
  });
});
