export const replaceAll = (searchValue: string, replaceValue: string) => (str: string) =>
  str.replace(new RegExp(searchValue, 'g'), replaceValue);
