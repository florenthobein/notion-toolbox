export type PropertyType =
  | 'checkbox'
  | 'created_by'
  | 'created_time'
  | 'date'
  | 'email'
  | 'files'
  | 'formula'
  | 'last_edited_by'
  | 'last_edited_time'
  | 'multi_select'
  | 'number'
  | 'people'
  | 'phone_number'
  | 'relation'
  | 'rich_text'
  | 'rollup'
  | 'select'
  | 'title'
  | 'url';

export enum PropertyTypeEnum {
  checkbox = 'checkbox',
  created_by = 'created_by',
  created_time = 'created_time',
  date = 'date',
  email = 'email',
  files = 'files',
  formula = 'formula',
  last_edited_by = 'last_edited_by',
  last_edited_time = 'last_edited_time',
  multi_select = 'multi_select',
  number = 'number',
  people = 'people',
  phone_number = 'phone_number',
  relation = 'relation',
  rich_text = 'rich_text',
  rollup = 'rollup',
  select = 'select',
  title = 'title',
  url = 'url',
}

export type PropertyValue =
  | CheckboxPropertyValue
  | DatePropertyValue
  | EmailPropertyValue
  | FilesPropertyValue
  | MultiSelectPropertyValue
  | NumberPropertyValue
  | PeoplePropertyValue
  | PhoneNumberPropertyValue
  | RelationPropertyValue
  | RichTextPropertyValue
  | SelectPropertyValue
  | TitlePropertyValue
  | UrlPropertyValue;

export interface CheckboxPropertyValue {
  checkbox: boolean;
}

export interface DatePropertyValue {
  date: { start: string; end?: string; time_zone?: string };
}

export interface EmailPropertyValue {
  email: string;
}

export interface FilesPropertyValue {
  files: Array<{ name: string; external: { url: string } }>;
}

export interface MultiSelectPropertyValue {
  multi_select: Array<{ name: string }>;
}

export interface NumberPropertyValue {
  number: number;
}

export interface PeoplePropertyValue {
  people: Array<{ id: string; object: string }>;
}

export interface PhoneNumberPropertyValue {
  phone_number: string;
}

export interface RelationPropertyValue {
  relation: Array<{ id: string }>;
}

export interface RichTextPropertyValue {
  rich_text: Array<{ text: { content: string } }>;
}

export interface SelectPropertyValue {
  select: { name: string };
}

export interface TitlePropertyValue {
  title: Array<{ text: { content: string } }>;
}

export interface UrlPropertyValue {
  url: string;
}
