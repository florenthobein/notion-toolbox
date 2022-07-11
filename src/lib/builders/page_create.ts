import {
  EmptyObject,
  PageUpsertOptions,
  ParamValue,
  PropertyType,
  PropertyValue,
} from '../types';

import { buildBlocks } from './builder.block';
import { buildProperties } from './builder.property';

export function build<TPropertyName extends string>(
  propertyTypes: Record<TPropertyName, PropertyType>,
  parentId: string, // By default, the parent database id, if the `parentIsPage` option is not set
  params: Partial<Record<TPropertyName, ParamValue>>,
  options?: PageUpsertOptions
): {
  parent: { page_id: string } | { database_id: string };
  properties: PropertyValue | EmptyObject;
  icon?: { type: string; emoji: string };
  cover?: { type: string; external: { url: string } };
  children?: any;
} {
  return {
    parent: options?.parentIsPage
      ? { page_id: parentId }
      : { database_id: parentId },
    properties: buildProperties(params, propertyTypes),
    ...(options?.icon
      ? {
          icon: {
            type: 'emoji',
            emoji: options?.icon,
          },
        }
      : {}),
    ...(options?.cover
      ? {
          cover: {
            type: 'external',
            external: {
              url: options?.cover,
            },
          },
        }
      : {}),
    ...(options?.children
      ? {
          children: buildBlocks(options?.children),
        }
      : {}),
  };
}
