import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.NUMBER_COL]: 3,
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My number column',
          number: { equals: 3 },
        },
      ],
    },
  },
};
