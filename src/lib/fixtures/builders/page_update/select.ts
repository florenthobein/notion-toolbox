import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.SELECT_COL]: 'New select',
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My select column': {
        select: {
          name: 'New select',
        },
      },
    },
  },
};
