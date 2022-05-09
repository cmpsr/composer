export const getSlug = (path: string | string[]): string => (Array.isArray(path) ? path.join('/') : path);
