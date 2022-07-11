import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  options: {
    cover: 'my_url',
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    cover: {
      type: 'external',
      external: {
        url: 'my_url',
      },
    },
  },
};
