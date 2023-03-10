import { isEmpty } from '../helpers';
import {
  CheckboxPropertyValue,
  DatePropertyValue,
  EmailPropertyValue,
  EmptyObject,
  FilesPropertyValue,
  MultiSelectPropertyValue,
  NumberPropertyValue,
  ParamValue,
  PeoplePropertyValue,
  PhoneNumberPropertyValue,
  PropertyType,
  PropertyValue,
  RelationPropertyValue,
  RichTextPropertyValue,
  SelectPropertyValue,
  StatusPropertyValue,
  TitlePropertyValue,
  UrlPropertyValue,
} from '../types';

export function buildProperties<TPropertyName extends string>(
  params: Partial<Record<TPropertyName, ParamValue>>,
  propertyTypes: Record<TPropertyName, PropertyType>
): PropertyValue | EmptyObject {
  if (!params) return {};
  if (!propertyTypes) return null;
  return Object.entries(params)
    .filter(([, propertyValue]) => !isEmpty(propertyValue))
    .map(([propertyName, propertyValue]: [TPropertyName, ParamValue]) => [
      propertyName,
      buildPropertyValue(propertyTypes?.[propertyName], propertyValue),
    ])
    .reduce(
      (acc, [propertyName, propertyPayload]) => ({
        ...acc,
        [propertyName as string]: propertyPayload,
      }),
      {}
    );
}

function buildPropertyValue(
  propertyType: PropertyType,
  paramValue: ParamValue
): PropertyValue | EmptyObject {
  if (!propertyType) return {};
  switch (propertyType) {
    case 'checkbox':
      return {
        checkbox: paramValue,
      } as CheckboxPropertyValue;
    case 'date':
      return {
        date: {
          start: paramValue,
          time_zone: 'Europe/Paris',
        },
      } as DatePropertyValue; // todo manage end & timezone
    case 'email':
      return {
        email: paramValue,
      } as EmailPropertyValue;
    case 'files':
      if (typeof (paramValue as any[])?.[0] === 'object') {
        return {
          files: paramValue as any[],
        } as FilesPropertyValue;
      }
      return {
        files:
          (paramValue as string[]).map((url) => ({
            name: url,
            external: { url },
          })) || [],
      } as FilesPropertyValue;
    case 'multi_select':
      return {
        multi_select:
          (paramValue as string[]).map((name) => ({
            name,
          })) || [],
      } as MultiSelectPropertyValue;
    case 'number':
      return {
        number: paramValue,
      } as NumberPropertyValue;
    case 'people':
      return {
        people:
          (paramValue as string[]).map((id) => ({
            object: 'user',
            id,
          })) || [],
      } as PeoplePropertyValue;
    case 'phone_number':
      return {
        phone_number: paramValue,
      } as PhoneNumberPropertyValue;
    case 'relation':
      return {
        relation:
          (paramValue as string[]).map((id) => ({
            id,
          })) || [],
      } as RelationPropertyValue;
    case 'rich_text':
      return {
        rich_text: [
          {
            text: { content: paramValue },
          },
        ],
      } as RichTextPropertyValue;
    case 'select':
      return {
        select: { name: paramValue },
      } as SelectPropertyValue;
    case 'status':
      return {
        status: { name: paramValue },
      } as StatusPropertyValue;
    case 'title':
      return {
        title: [
          {
            text: { content: paramValue },
          },
        ],
      } as TitlePropertyValue;
    case 'url':
      return {
        url: paramValue,
      } as UrlPropertyValue;
  }
  return {};
}
