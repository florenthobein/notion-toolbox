import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.SELECT_COL]: 'My select 1',
    [FixtureDB.NUMBER_COL]: 4,
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My select column',
          select: { equals: 'My select 1' },
        },
        {
          property: 'My number column',
          number: { equals: 4 },
        },
      ],
    },
  },
};
