import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.MULTI_SELECT_COL]: 'My multi_select 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My multi_select column',
          multi_select: { contains: 'My multi_select 1' },
        },
      ],
    },
  },
};
