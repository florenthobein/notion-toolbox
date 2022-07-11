import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.RELATION_COL]: ['New relation id 1', 'New relation id 2'],
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My relation column': {
        relation: [
          {
            id: 'New relation id 1',
          },
          {
            id: 'New relation id 2',
          },
        ],
      },
    },
  },
};
