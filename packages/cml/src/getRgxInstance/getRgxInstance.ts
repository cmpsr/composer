export const getRgxInstance = () =>
  new RegExp('{{([^:^{]*):(\\w+)(?:\\((.+)?\\))?(\\[([^\\]]*)?\\])?(?::([^}}]*))?}}', 'g');
