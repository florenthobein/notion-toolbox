import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.FORMULA_COL]: 'My formula 1',
  },
  expectedPayload: {
    // not supported
  },
};
