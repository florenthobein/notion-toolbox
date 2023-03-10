import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.LAST_EDITED_TIME_COL]: 'My last_edited_time 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My last_edited_time column',
          last_edited_time: { equals: 'My last_edited_time 1' },
        },
      ],
    },
  },
};
