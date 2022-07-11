import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  options: {
    icon: '🥬',
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    icon: {
      type: 'emoji',
      emoji: '🥬',
    },
  },
};
