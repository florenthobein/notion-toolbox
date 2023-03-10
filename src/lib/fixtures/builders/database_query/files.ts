import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.FILES_COL]: true,
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My files column',
          files: { is_not_empty: true },
        },
      ],
    },
  },
};
