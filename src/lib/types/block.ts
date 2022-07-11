import { ParamValue } from './base';

export type BlockType =
  | 'audio'
  | 'bookmark'
  | 'breadcrumb'
  | 'bulleted_list_item'
  | 'callout'
  | 'child_page'
  | 'child_database'
  | 'code'
  | 'column'
  | 'column_list'
  | 'divider'
  | 'embed'
  | 'equation'
  | 'file'
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'image'
  | 'link_preview'
  | 'link_to_page'
  | 'numbered_list_item'
  | 'paragraph'
  | 'pdf'
  | 'quote'
  | 'synced_block'
  | 'table'
  | 'table_of_contents'
  | 'table_row'
  | 'template'
  | 'to_do'
  | 'toggle'
  | 'video';

export enum BlockTypeEnum {
  audio = 'audio',
  bookmark = 'bookmark',
  breadcrumb = 'breadcrumb',
  bulleted_list_item = 'bulleted_list_item',
  callout = 'callout',
  child_page = 'child_page',
  child_database = 'child_database',
  code = 'code',
  column = 'column',
  column_list = 'column_list',
  divider = 'divider',
  embed = 'embed',
  equation = 'equation',
  file = 'file',
  heading_1 = 'heading_1',
  heading_2 = 'heading_2',
  heading_3 = 'heading_3',
  image = 'image',
  link_preview = 'link_preview',
  link_to_page = 'link_to_page',
  numbered_list_item = 'numbered_list_item',
  paragraph = 'paragraph',
  pdf = 'pdf',
  quote = 'quote',
  synced_block = 'synced_block',
  table = 'table',
  table_of_contents = 'table_of_contents',
  table_row = 'table_row',
  template = 'template',
  to_do = 'to_do',
  toggle = 'toggle',
  video = 'video',
}

export type Block = Partial<Record<BlockType, ParamValue>>;
