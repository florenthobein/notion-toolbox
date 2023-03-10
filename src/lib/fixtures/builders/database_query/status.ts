import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.STATUS_COL]: 'My status 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My status column',
          status: { equals: 'My status 1' },
        },
      ],
    },
  },
};
