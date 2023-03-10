import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.PEOPLE_COL]: 'My people id 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My people column',
          people: { contains: 'My people id 1' },
        },
      ],
    },
  },
};
