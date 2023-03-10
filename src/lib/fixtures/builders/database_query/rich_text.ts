import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.RICH_TEXT_COL]: 'My rich_text 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My rich_text column',
          rich_text: { contains: 'My rich_text 1' },
        },
      ],
    },
  },
};
