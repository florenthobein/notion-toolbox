export const hasOr = <T>(
  q: { or: unknown } | { and: unknown } | T
): q is { or: unknown } => (q as { or: unknown }).or !== undefined;

export const hasAnd = <T>(
  q: { or: unknown } | { and: unknown } | T
): q is { and: unknown } => (q as { and: unknown }).and !== undefined;
