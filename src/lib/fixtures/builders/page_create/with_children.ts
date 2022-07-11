import { BlockTypeEnum } from '../../../types';
import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  params: {
    [FixtureDB.TITLE_COL]: 'New title',
  },
  options: {
    children: [{ [BlockTypeEnum.heading_2]: 'Big title' }],
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
    children: [
      {
        heading_2: {
          color: 'default',
          rich_text: [
            {
              text: {
                content: 'Big title',
              },
            },
          ],
        },
      },
    ],
  },
};
