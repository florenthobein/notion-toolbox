import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.PHONE_NUMBER_COL]: 'New phone_number',
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My phone_number column': {
        phone_number: 'New phone_number',
      },
    },
  },
};
