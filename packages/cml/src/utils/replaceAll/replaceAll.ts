export const replaceAll = (searchValue: string, replaceValue: string) => (str: string) =>
  str.replace(new RegExp(escapeRegExp(searchValue), 'g'), replaceValue);

const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
