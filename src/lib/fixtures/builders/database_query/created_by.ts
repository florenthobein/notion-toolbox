import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.CREATED_BY_COL]: 'My created_by 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My created_by column',
          created_by: { contains: 'My created_by 1' },
        },
      ],
    },
  },
};
