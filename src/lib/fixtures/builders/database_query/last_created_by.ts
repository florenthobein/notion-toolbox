import { Fixture, FixtureDB } from '../../fixture.shared';

export const fixture: Fixture<FixtureDB> = {
  filter: {
    [FixtureDB.LAST_EDITED_BY_COL]: 'My last_edited_by 1',
  },
  expectedPayload: {
    filter: {
      and: [
        {
          property: 'My last_edited_by column',
          last_edited_by: { contains: 'My last_edited_by 1' },
        },
      ],
    },
  },
};
