import {
  FilterParam,
  FilterPropertyParam,
  PropertyFilter,
  PropertyType,
  FilterParamValue,
} from '../types';
import { buildFilter } from './builder.filter';
import { hasAnd, hasOr, isObject, keyValPairsFromArray } from '../helpers';

export function build<TPropertyName extends string>(
  propertyTypes: Record<TPropertyName, PropertyType>,
  filter?: FilterParam<TPropertyName>
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

// todo refacto this
function buildFilterPayload<TPropertyName extends string>(
  filter: FilterParam<TPropertyName>,
  propertyTypes: Record<TPropertyName, PropertyType>
): { or?: PropertyFilter[]; and?: PropertyFilter[] } {
  const defaultOperator = 'and';
  let operator: 'and' | 'or';
  let keyValPairs: Array<[string, FilterParamValue]>;
  if (hasOr<FilterPropertyParam<TPropertyName>>(filter)) {
    operator = 'or';
    keyValPairs = keyValPairsFromArray(filter.or);
  } else if (hasAnd<FilterPropertyParam<TPropertyName>>(filter)) {
    operator = 'and';
    keyValPairs = keyValPairsFromArray(filter.and);
  } else {
    operator = defaultOperator;
    keyValPairs = Object.entries(filter);
  }
  return {
    [operator]: keyValPairs.map(
      ([propertyName, filterValue]: [string, string | boolean]) => {
        if (propertyName === 'or' || propertyName === 'and') {
          return buildFilterPayload(
            { [propertyName]: filterValue } as FilterParam<TPropertyName>,
            propertyTypes
          );
        }
        let customFilterCondition;
        if (isObject(filterValue)) {
          [[customFilterCondition, filterValue]] = Object.entries(filterValue);
        }
        return buildFilter(
          propertyName as TPropertyName,
          filterValue,
          propertyTypes,
          customFilterCondition
        );
      }
    ),
  };
}
