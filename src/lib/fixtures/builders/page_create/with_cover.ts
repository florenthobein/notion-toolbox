import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.TITLE_COL]: 'New title',
  },
  options: {
    cover: 'my_url',
  },
  expectedPayload: {
    parent: { database_id: 'FAKE_PAGE_ID' },
    properties: {
      'My title column': {
        title: [
          {
            text: {
              content: 'New title',
            },
          },
        ],
      },
    },
    cover: {
      type: 'external',
      external: {
        url: 'my_url',
      },
    },
  },
};
