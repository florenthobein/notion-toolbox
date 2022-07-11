import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.DATE_COL]: 'New date',
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My date column': {
        date: {
          start: 'New date', // todo test `end` and `time_zone`
          time_zone: 'Europe/Paris',
        },
      },
    },
  },
};
