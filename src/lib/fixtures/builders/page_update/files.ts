import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.FILES_COL]: ['New file url 1', 'New file url 2'],
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My files column': {
        files: [
          {
            name: 'New file url 1',
            external: {
              url: 'New file url 1',
            },
          },
          {
            name: 'New file url 2',
            external: {
              url: 'New file url 2',
            },
          },
        ],
      },
    },
  },
};
