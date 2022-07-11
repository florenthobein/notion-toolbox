import { EmptyObject } from './base';
import { Block } from './block';
import { PropertyValue } from './property';

export interface PageUpsertOptions {
  parentIsPage?: boolean;
  icon?: string;
  cover?: string;
  children?: Block[];
  archive?: boolean;
}

export interface PageContent {
  id: string;
  url: string;
  icon: { type: string; emoji: string };
  properties: PropertyValue;
}

export interface PageUpdatePayload {
  page_id: string;
  properties?: PropertyValue | EmptyObject;
  archive?: boolean;
  icon?: { type: string; emoji: string };
  cover?: { type: string; external: { url: string } };
}
