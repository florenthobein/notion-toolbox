import {
  PageUpsertOptions,
  PropertyTypeEnum,
  FilterParam,
  ParamValue,
} from '../types';

export enum FixtureDB {
  CHECKBOX_COL = 'My checkbox column',
  CREATED_BY_COL = 'My created_by column',
  CREATED_TIME_COL = 'My created_time column',
  DATE_COL = 'My date column',
  EMAIL_COL = 'My email column',
  FILES_COL = 'My files column',
  FORMULA_COL = 'My formula column',
  LAST_EDITED_BY_COL = 'My last_edited_by column',
  LAST_EDITED_TIME_COL = 'My last_edited_time column',
  MULTI_SELECT_COL = 'My multi_select column',
  NUMBER_COL = 'My number column',
  PEOPLE_COL = 'My people column',
  PHONE_NUMBER_COL = 'My phone_number column',
  RELATION_COL = 'My relation column',
  RICH_TEXT_COL = 'My rich_text column',
  ROLLUP_COL = 'My rollup column',
  SELECT_COL = 'My select column',
  STATUS_COL = 'My status column',
  TITLE_COL = 'My title column',
  URL_COL = 'My url column',
}

export const FIXTURE_DB_TYPES: Record<FixtureDB, PropertyTypeEnum> = {
  [FixtureDB.CHECKBOX_COL]: PropertyTypeEnum.checkbox,
  [FixtureDB.CREATED_BY_COL]: PropertyTypeEnum.created_by,
  [FixtureDB.CREATED_TIME_COL]: PropertyTypeEnum.created_time,
  [FixtureDB.DATE_COL]: PropertyTypeEnum.date,
  [FixtureDB.EMAIL_COL]: PropertyTypeEnum.email,
  [FixtureDB.FILES_COL]: PropertyTypeEnum.files,
  [FixtureDB.FORMULA_COL]: PropertyTypeEnum.formula,
  [FixtureDB.LAST_EDITED_BY_COL]: PropertyTypeEnum.last_edited_by,
  [FixtureDB.LAST_EDITED_TIME_COL]: PropertyTypeEnum.last_edited_time,
  [FixtureDB.MULTI_SELECT_COL]: PropertyTypeEnum.multi_select,
  [FixtureDB.NUMBER_COL]: PropertyTypeEnum.number,
  [FixtureDB.PEOPLE_COL]: PropertyTypeEnum.people,
  [FixtureDB.PHONE_NUMBER_COL]: PropertyTypeEnum.phone_number,
  [FixtureDB.RELATION_COL]: PropertyTypeEnum.relation,
  [FixtureDB.RICH_TEXT_COL]: PropertyTypeEnum.rich_text,
  [FixtureDB.ROLLUP_COL]: PropertyTypeEnum.rollup,
  [FixtureDB.SELECT_COL]: PropertyTypeEnum.select,
  [FixtureDB.STATUS_COL]: PropertyTypeEnum.status,
  [FixtureDB.TITLE_COL]: PropertyTypeEnum.title,
  [FixtureDB.URL_COL]: PropertyTypeEnum.url,
};

export const FAKE_DATABASE_ID = 'FAKE_DATABASE_ID';
export const FAKE_PAGE_ID = 'FAKE_PAGE_ID';

export interface Fixture<TPropertyName extends string> {
  params?: Partial<Record<TPropertyName, ParamValue>>;
  filter?: FilterParam<TPropertyName>;
  options?: PageUpsertOptions;
  expectedPayload: unknown;
}
