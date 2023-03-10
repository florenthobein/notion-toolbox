import { assertCoherentCustomFilterCondition } from './builder.filter.assert';
import {
  EmptyObject,
  FilterConditionEnum,
  PropertyFilter,
  PropertyType,
} from '../types';

export function buildFilter<TPropertyName extends string>(
  propertyName: TPropertyName,
  filterValue: string | boolean | EmptyObject,
  propertyTypes: Record<TPropertyName, PropertyType>,
  customFilterCondition?: FilterConditionEnum
): { property: string } & PropertyFilter {
  if (!propertyTypes) return null;
  assertCoherentCustomFilterCondition(
    propertyTypes[propertyName],
    customFilterCondition
  );
  let propertyPayload: PropertyFilter;
  switch (propertyTypes[propertyName]) {
    case 'checkbox':
      propertyPayload = {
        checkbox: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'created_by':
      propertyPayload = {
        created_by: {
          [customFilterCondition ?? FilterConditionEnum.contains]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'created_time':
      propertyPayload = {
        created_time: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'date':
      propertyPayload = {
        date: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'email':
      propertyPayload = {
        email: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'files':
      propertyPayload = {
        files: {
          [customFilterCondition ?? FilterConditionEnum.is_not_empty]:
            filterValue,
        },
      } as PropertyFilter;
      break;
    case 'last_edited_by':
      propertyPayload = {
        last_edited_by: {
          [customFilterCondition ?? FilterConditionEnum.contains]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'last_edited_time':
      propertyPayload = {
        last_edited_time: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'multi_select':
      propertyPayload = {
        multi_select: {
          [customFilterCondition ?? FilterConditionEnum.contains]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'number':
      propertyPayload = {
        number: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'people':
      propertyPayload = {
        people: {
          [customFilterCondition ?? FilterConditionEnum.contains]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'phone_number':
      propertyPayload = {
        phone_number: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'relation':
      propertyPayload = {
        relation: {
          [customFilterCondition ?? FilterConditionEnum.contains]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'rich_text':
      propertyPayload = {
        rich_text: {
          [customFilterCondition ?? FilterConditionEnum.contains]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'select':
      propertyPayload = {
        select: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'status':
      propertyPayload = {
        status: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'title':
      propertyPayload = {
        title: {
          [customFilterCondition ?? FilterConditionEnum.contains]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'url':
      propertyPayload = {
        url: {
          [customFilterCondition ?? FilterConditionEnum.equals]: filterValue,
        },
      } as PropertyFilter;
      break;
    case 'formula':
      throw new Error('Not implemented');
    case 'rollup':
      throw new Error('Not implemented');
  }
  return {
    property: propertyName,
    ...propertyPayload,
  };
}
