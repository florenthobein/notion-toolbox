import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.CREATED_TIME_COL]: 'My created_time 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My created_time column',
          created_time: { equals: 'My created_time 1' },
        },
      ],
    },
  },
};
