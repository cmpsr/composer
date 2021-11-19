export const SIZES = ['xs', 'sm', 'md', 'lg'] as const;

export type Sizes = typeof SIZES[number];
