import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.URL_COL]: 'New url',
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My url column': {
        url: 'New url',
      },
    },
  },
};
