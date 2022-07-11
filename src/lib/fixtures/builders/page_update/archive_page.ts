import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  options: {
    archive: true,
  },
  expectedPayload: {
    page_id: 'FAKE_PAGE_ID',
    archive: true,
  },
};
