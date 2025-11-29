/**
 * Array and collection manipulation utilities
 *
 * Provides common array operations for data transformation,
 * filtering, and organization throughout the application.
 */

/**
 * Remove duplicates from array
 *
 * @param array - Array to deduplicate
 * @returns Array with unique values
 *
 * @example
 * unique([1, 2, 2, 3]) // [1, 2, 3]
 */
export function unique<T>(array: readonly T[]): T[] {
  return [...new Set(array)];
}

/**
 * Group array items by key
 *
 * @param array - Array to group
 * @param key - Key to group by
 * @returns Object with grouped items
 *
 * @example
 * groupBy([{type: 'a'}, {type: 'b'}], 'type') // { a: [{type: 'a'}], b: [{type: 'b'}] }
 */
export function groupBy<T extends Record<string, unknown>>(
  array: readonly T[],
  key: keyof T,
): Record<string, T[]> {
  return array.reduce(
    (groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    },
    {} as Record<string, T[]>,
  );
}

/**
 * Sort array by key
 *
 * @param array - Array to sort
 * @param key - Key to sort by
 * @returns Sorted array
 *
 * @example
 * sortBy([{name: 'b'}, {name: 'a'}], 'name') // [{name: 'a'}, {name: 'b'}]
 */
export function sortBy<T extends Record<string, unknown>>(
  array: readonly T[],
  key: keyof T,
): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal === null || aVal === undefined) return 1;
    if (bVal === null || bVal === undefined) return -1;

    return String(aVal).localeCompare(String(bVal));
  });
}
