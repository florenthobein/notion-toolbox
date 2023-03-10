import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.SELECT_COL]: { is_empty: true },
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My select column',
          select: { is_empty: true },
        },
      ],
    },
  },
};
