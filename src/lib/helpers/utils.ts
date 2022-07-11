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
