// src/app/lib/utils.ts

/**
 * Combines multiple class names into a single string, filtering out falsy values.
 * Useful for conditional class rendering in components.
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

