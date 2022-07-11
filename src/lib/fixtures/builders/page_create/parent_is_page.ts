import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.TITLE_COL]: 'New title',
  },
  options: {
    parentIsPage: true,
  },
  expectedPayload: {
    parent: { page_id: 'FAKE_PAGE_ID' },
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
  },
};
