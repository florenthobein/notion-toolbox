import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.EMAIL_COL]: 'My email 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My email column',
          email: { equals: 'My email 1' },
        },
      ],
    },
  },
};
