import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.MULTI_SELECT_COL]: ['New multi_select 1', 'New multi_select 2'],
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My multi_select column': {
        multi_select: [
          {
            name: 'New multi_select 1',
          },
          {
            name: 'New multi_select 2',
          },
        ],
      },
    },
  },
};
