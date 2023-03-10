import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.RELATION_COL]: 'My relation id 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My relation column',
          relation: { contains: 'My relation id 1' },
        },
      ],
    },
  },
};
