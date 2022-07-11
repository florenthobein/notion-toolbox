import 'jest';

import {
  FAKE_PAGE_ID,
  FIXTURE_DB_TYPES,
  FixtureDB,
} from '../fixtures/fixture.shared';
import { fixture as parentIsDatabaseFixture } from '../fixtures/builders/page_create/parent_is_database';
import { fixture as parentIsPageFixture } from '../fixtures/builders/page_create/parent_is_page';
import { fixture as withChildrenFixture } from '../fixtures/builders/page_create/with_children';
import { fixture as withCoverFixture } from '../fixtures/builders/page_create/with_cover';
import { fixture as withIconFixture } from '../fixtures/builders/page_create/with_icon';

import { build } from './page_create';

describe('> Testing page create builder', () => {
  test.each([
    { name: 'parentIsDatabase', fixture: parentIsDatabaseFixture },
    { name: 'parentIsPage', fixture: parentIsPageFixture },
    { name: 'withChildren', fixture: withChildrenFixture },
    { name: 'withCover', fixture: withCoverFixture },
    { name: 'withIcon', fixture: withIconFixture },
  ])('$name', async ({ fixture: { params, options, expectedPayload } }) => {
    const payload = build<FixtureDB>(
      FIXTURE_DB_TYPES,
      FAKE_PAGE_ID,
      params,
      options
    );
    expect(payload).toMatchObject(expectedPayload);
  });
});
