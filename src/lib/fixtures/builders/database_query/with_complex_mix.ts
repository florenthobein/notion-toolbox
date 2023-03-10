import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    or: [
      { [FixtureDB.PEOPLE_COL]: 'My people id 1' },
      { [FixtureDB.NUMBER_COL]: 4 },
      {
        and: [{ [FixtureDB.STATUS_COL]: 'My status 1' }],
      },
    ],
  },
  expectedPayload: {
    filter: {
      or: [
        {
          property: 'My people column',
          people: { contains: 'My people id 1' },
        },
        {
          property: 'My number column',
          number: { equals: 4 },
        },
        {
          and: [
            {
              property: 'My status column',
              status: { equals: 'My status 1' },
            },
          ],
        },
      ],
    },
  },
};
