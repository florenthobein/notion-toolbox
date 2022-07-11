import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.NUMBER_COL]: 3,
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My number column': {
        number: 3,
      },
    },
  },
};
