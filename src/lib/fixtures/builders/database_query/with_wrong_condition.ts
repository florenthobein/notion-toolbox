import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.SELECT_COL]: { before: 'My select 1' },
  },
  expectedPayload: {
    // expected to throw
  },
};
