export const inputVariants = ['outline', 'filled', 'flushed'] as const;
export type InputVariant = typeof inputVariants[number];
