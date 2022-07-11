import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.RICH_TEXT_COL]: 'New rich_text', // todo this could be elaborated
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    properties: {
      'My rich_text column': {
        rich_text: [
          {
            text: {
              content: 'New rich_text',
            },
          },
        ],
      },
    },
  },
};
