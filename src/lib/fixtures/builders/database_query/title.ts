import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.TITLE_COL]: 'My title 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My title column',
          title: { contains: 'My title 1' },
        },
      ],
    },
  },
};
