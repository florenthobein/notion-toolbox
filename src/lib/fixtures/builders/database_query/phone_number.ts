import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.PHONE_NUMBER_COL]: 'My phone_number 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My phone_number column',
          phone_number: { equals: 'My phone_number 1' },
        },
      ],
    },
  },
};
