import { configNavbar } from '.';

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

describe('configNavbar', () => {
  test('should be called without navbar', () => {
    configNavbar(dummyPageContent);
    expect(mockInsertSection).toBeCalledTimes(1);
    expect(mockInsertSection).toHaveBeenCalledWith(dummyContent, undefined, 'unshift');
  });

  test('should be called with navbar', () => {
    const navbar = { model: {} };
    configNavbar({ ...dummyPageContent, navbar });
    expect(mockInsertSection).toBeCalledTimes(1);
    expect(mockInsertSection).toHaveBeenCalledWith(dummyContent, navbar, 'unshift');
  });
});
