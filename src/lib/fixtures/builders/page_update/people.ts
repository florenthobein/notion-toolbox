import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.PEOPLE_COL]: ['New people id 1', 'New people id 2'],
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My people column': {
        people: [
          {
            id: 'New people id 1',
            object: 'user',
          },
          {
            id: 'New people id 2',
            object: 'user',
          },
        ],
      },
    },
  },
};
