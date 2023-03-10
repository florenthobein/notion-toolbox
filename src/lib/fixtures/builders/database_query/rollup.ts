import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.ROLLUP_COL]: 'My rollup 1',
  },
  expectedPayload: {
    // not supported
  },
};
