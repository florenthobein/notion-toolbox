import { ParamValue, PropertyType } from '../types';

export function readPageProperty<TPropertyName extends string>(
  page: any,
  propertyName: TPropertyName,
  propertyTypes: Record<TPropertyName, PropertyType>
): ParamValue {
  if (!propertyTypes) return '';
  const property = page.properties[propertyName];
  if (!property) return '';
  switch (propertyTypes[propertyName]) {
    case 'checkbox':
      return property.checkbox; // boolean
    case 'created_by':
      return property.created_by.id; // string (uuid)
    case 'created_time':
      return property.created_time; // string (datetime)
    case 'date':
      return property.date; // string (datetime)
    case 'email':
      return property.email; // string
    case 'files':
      return property.files;
    case 'formula':
      return null; // automatically calculated
    case 'last_edited_by':
      return property.last_edited_by; // string (uuid)
    case 'last_edited_time':
      return property.last_edited_time; // string (datetime)
    case 'multi_select':
      return property.multi_select.map((v: any) => v.name); // string[]
    case 'number':
      return property.number; // number
    case 'people':
      return property.people.map((v: any) => v.id); // string[] (uuid)
    case 'phone_number':
      return property.phone_number; // string
    case 'relation':
      return property.relation.map((v: any) => v.id); // string[] (uuid)
    case 'rich_text':
      return property.rich_text?.reduce(
        (acc: string, elt: any) => `${acc}${elt.text?.content}`,
        ''
      ); // string
    case 'rollup':
      return null; // automatically calculated
    case 'select':
      return property.select?.name; // string
    case 'url':
      return property.url; // string
    case 'title':
      return property.title?.[0]?.plain_text ?? ''; // string
  }
  return '';
}
