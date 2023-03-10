import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.URL_COL]: 'My url 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My url column',
          url: { equals: 'My url 1' },
        },
      ],
    },
  },
};
