import { PageUpsertOptions, ParamValue, PropertyTypeEnum } from '../types';

export enum FixtureDB {
  CHECKBOX_COL = 'My checkbox column',
  DATE_COL = 'My date column',
  EMAIL_COL = 'My email column',
  FILES_COL = 'My files column',
  MULTI_SELECT_COL = 'My multi_select column',
  NUMBER_COL = 'My number column',
  PEOPLE_COL = 'My people column',
  PHONE_NUMBER_COL = 'My phone_number column',
  RELATION_COL = 'My relation column',
  RICH_TEXT_COL = 'My rich_text column',
  SELECT_COL = 'My select column',
  TITLE_COL = 'My title column',
  URL_COL = 'My url column',
}

export const FIXTURE_DB_TYPES: Record<FixtureDB, PropertyTypeEnum> = {
  [FixtureDB.CHECKBOX_COL]: PropertyTypeEnum.checkbox,
  [FixtureDB.DATE_COL]: PropertyTypeEnum.date,
  [FixtureDB.EMAIL_COL]: PropertyTypeEnum.email,
  [FixtureDB.FILES_COL]: PropertyTypeEnum.files,
  [FixtureDB.MULTI_SELECT_COL]: PropertyTypeEnum.multi_select,
  [FixtureDB.NUMBER_COL]: PropertyTypeEnum.number,
  [FixtureDB.PEOPLE_COL]: PropertyTypeEnum.people,
  [FixtureDB.PHONE_NUMBER_COL]: PropertyTypeEnum.phone_number,
  [FixtureDB.RELATION_COL]: PropertyTypeEnum.relation,
  [FixtureDB.RICH_TEXT_COL]: PropertyTypeEnum.rich_text,
  [FixtureDB.SELECT_COL]: PropertyTypeEnum.select,
  [FixtureDB.TITLE_COL]: PropertyTypeEnum.title,
  [FixtureDB.URL_COL]: PropertyTypeEnum.url,
};

export const FAKE_DATABASE_ID = 'FAKE_DATABASE_ID';
export const FAKE_PAGE_ID = 'FAKE_PAGE_ID';

export interface Fixture<TPropertyName extends string> {
  params?: Partial<Record<TPropertyName, ParamValue>>;
  options?: PageUpsertOptions;
  expectedPayload: unknown;
}
