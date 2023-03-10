export function isEmpty(propertyValue: unknown): boolean {
  const valueIsEmpty = (v: unknown): boolean => {
    if (typeof v === 'undefined') return true;
    if (typeof v === 'string' && !v) return true;
    if (Array.isArray(v) && !v.filter((i) => !valueIsEmpty(i)).length)
      return true;
    if (
      typeof v === 'object' &&
      !Array.isArray(v) &&
      JSON.stringify(v) === '{}'
    )
      return true;
    return false;
  };
  return valueIsEmpty(propertyValue);
}

export const isObject = (value: unknown): boolean =>
  typeof value === 'object' && !Array.isArray(value) && value !== null;

// transforms [{ myCol1: 'value1' }, { myCol2: 'value2' }]
// into       [['myCol1', 'value1'], ['myCol2', 'value2']]
export const keyValPairsFromArray = (
  d: Array<{ [k: string]: unknown }>
): Array<[string, unknown]> =>
  d.reduce((acc, item) => [...acc, ...Object.entries(item)], []);
