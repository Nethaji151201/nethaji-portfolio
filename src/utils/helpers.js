/**
 * Combine multiple class names together, filtering out falsy values
 * Useful for conditionally applying Tailwind classes
 * 
 * @param {...(string | undefined | null | false)} classes 
 * @returns {string} Combined class string
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
