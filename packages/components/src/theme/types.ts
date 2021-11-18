export const SIZES = ['xs', 'sm', 'md', 'lg'] as const;

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';

export type Sizes = typeof SIZES[number];
