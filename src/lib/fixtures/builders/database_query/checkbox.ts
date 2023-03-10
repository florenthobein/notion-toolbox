import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.CHECKBOX_COL]: true,
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My checkbox column',
          checkbox: { equals: true },
        },
      ],
    },
  },
};
