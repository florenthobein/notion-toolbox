import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.CHECKBOX_COL]: true,
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My checkbox column': {
        checkbox: true,
      },
    },
  },
};
