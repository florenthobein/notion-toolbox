import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.DATE_COL]: 'My date 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My date column',
          date: { equals: 'My date 1' },
        },
      ],
    },
  },
};
