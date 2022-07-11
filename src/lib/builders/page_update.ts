import {
  PageUpdatePayload,
  PageUpsertOptions,
  ParamValue,
  PropertyType,
} from '../types';

import { buildProperties } from './builder.property';

export function build<TPropertyName extends string>(
  propertyTypes: Record<TPropertyName, PropertyType>,
  pageId: string,
  params?: Partial<Record<TPropertyName, ParamValue>>,
  options?: PageUpsertOptions
): PageUpdatePayload {
  return {
    page_id: pageId,
    ...(params
      ? {
          properties: buildProperties(params, propertyTypes),
        }
      : {}),
    ...(options?.archive
      ? {
          archive: true,
        }
      : {}),
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
  };
}
