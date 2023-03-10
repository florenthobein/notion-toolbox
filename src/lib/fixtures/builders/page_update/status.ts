import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.STATUS_COL]: 'New status',
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My status column': {
        status: {
          name: 'New status',
        },
      },
    },
  },
};
