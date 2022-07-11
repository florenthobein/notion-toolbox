import { FilterParam, PropertyFilter, PropertyType } from '../types';

import { buildFilter } from './builder.filter';

export function build<TPropertyName extends string>(
  propertyTypes: Record<TPropertyName, PropertyType>,
  filter?: FilterParam
): {
  filter?: { or?: PropertyFilter[]; and?: PropertyFilter[] };
  sorts?: Array<
    | {
        property: PropertyType;
        direction: 'ascending' | 'descending';
      }
    | {
        timestamp: 'created_time' | 'last_edited_time';
        direction: 'ascending' | 'descending';
      }
  >;
  start_cursor?: string;
  page_size?: number;
} {
  return {
    ...(filter
      ? {
          filter: buildFilterPayload<TPropertyName>(filter, propertyTypes),
        }
      : {}),
  };
}

function buildFilterPayload<TPropertyName extends string>(
  filter: FilterParam,
  propertyTypes: Record<TPropertyName, PropertyType>
): { or?: PropertyFilter[]; and?: PropertyFilter[] } {
  const defaultOperator = 'and';
  const hasOr = (
    q: { or: unknown } | { and: unknown } | PropertyFilter
  ): q is { or: unknown } => (q as { or: unknown }).or !== undefined;
  const hasAnd = (
    q: { or: unknown } | { and: unknown } | PropertyFilter
  ): q is { and: unknown } => (q as { and: unknown }).and !== undefined;
  let operator: 'and' | 'or';
  let data: FilterParam | FilterParam[];
  if (hasOr(filter)) {
    operator = 'or';
    data = filter.or;
  } else if (hasAnd(filter)) {
    operator = 'and';
    data = filter.and;
  } else {
    operator = defaultOperator;
    data = filter;
  }
  return {
    [operator]: Object.entries(data).map(
      ([propertyName, filterValue]: [string, string | boolean]) =>
        buildFilter(propertyName as TPropertyName, filterValue, propertyTypes)
    ),
  };
}
