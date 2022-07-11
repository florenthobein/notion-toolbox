import {
  Block,
  BlockType,
  BlockTypeEnum,
  Color,
  EmptyObject,
  ParamValue,
  PropertyValue,
} from '../types';

export function buildBlocks(
  params: Block[]
): Array<Partial<Record<BlockTypeEnum, PropertyValue | EmptyObject>>> {
  return params?.map((block) =>
    Object.entries(block)
      .map(([blockType, blockValue]: [BlockType, ParamValue]) => [
        blockType,
        buildBlockValue(blockType, blockValue),
      ])
      .reduce(
        (acc, [blockType, blockPayload]) => ({
          ...acc,
          [blockType as string]: blockPayload,
        }),
        {}
      )
  );
}

export function buildBlockValue(
  blockType: BlockType,
  paramValue: ParamValue,
  children: Block[] = [],
  color: Color = 'default',
  isPage?: boolean
): any | EmptyObject {
  if (!blockType) return {};
  switch (blockType) {
    case 'audio': // todo not implemented
      return {};
    case 'bookmark':
    case 'embed':
      return {
        url: paramValue,
      };
    case 'breadcrumb':
    case 'divider':
      return {};
    case 'bulleted_list_item':
    case 'numbered_list_item':
    case 'paragraph':
    case 'quote':
    case 'toggle':
      return {
        color,
        rich_text: [
          {
            text: { content: paramValue },
          },
        ],
        children,
      };
    case 'callout':
      return {
        color,
        rich_text: [
          {
            text: { content: paramValue },
          },
        ],
        icon: { emoji: '⚠️' }, // todo
        children,
      };
    case 'code':
      return {
        color,
        rich_text: [
          {
            text: { content: paramValue },
          },
        ],
        language: 'plain text', // todo
      };
    case 'column':
    case 'column_list':
      return {
        children,
      };
    case 'child_page':
    case 'child_database':
      return {
        title: paramValue,
      };
    case 'equation':
      return {
        expression: paramValue,
      };
    case 'file':
    case 'image':
    case 'pdf':
    case 'video':
      return {
        external: {
          url: paramValue,
        },
      };
    case 'heading_1':
    case 'heading_2':
    case 'heading_3':
      return {
        color,
        rich_text: [
          {
            text: { content: paramValue },
          },
        ],
      };
    case 'link_to_page':
      return isPage
        ? {
            type: 'page_id',
            page_id: paramValue,
          }
        : {
            type: 'database_id',
            database_id: paramValue,
          };
    case 'synced_block':
      return {
        synced_from: paramValue ? { block_id: paramValue } : null,
        children,
      };
    case 'table':
      return {
        table_width: paramValue,
        has_column_header: false, // todo
        has_row_header: false, // todo
        children,
      };
    case 'table_of_contents':
      return {
        color,
      };
    case 'table_row':
      return {
        cells: [
          // todo
          children,
        ],
      };
    case 'template':
      return {
        rich_text: [
          {
            text: { content: paramValue },
          },
        ],
        children,
      };
    case 'to_do':
      return {
        color,
        rich_text: [
          {
            text: { content: paramValue },
          },
        ],
        checked: false, // todo
        children,
      };
  }
  return {};
}
