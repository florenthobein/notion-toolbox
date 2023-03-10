import 'jest';

import {
  FAKE_PAGE_ID,
  FIXTURE_DB_TYPES,
  FixtureDB,
} from '../fixtures/fixture.shared';
import { fixture as archivePageFixture } from '../fixtures/builders/page_update/archive_page';
import { fixture as checkboxFixture } from '../fixtures/builders/page_update/checkbox';
import { fixture as dateFixture } from '../fixtures/builders/page_update/date';
import { fixture as emailFixture } from '../fixtures/builders/page_update/email';
import { fixture as filesFixture } from '../fixtures/builders/page_update/files';
import { fixture as multiSelectFixture } from '../fixtures/builders/page_update/multi_select';
import { fixture as numberFixture } from '../fixtures/builders/page_update/number';
import { fixture as peopleFixture } from '../fixtures/builders/page_update/people';
import { fixture as phoneNumberFixture } from '../fixtures/builders/page_update/phone_number';
import { fixture as relationFixture } from '../fixtures/builders/page_update/relation';
import { fixture as richTextFixture } from '../fixtures/builders/page_update/rich_text';
import { fixture as selectFixture } from '../fixtures/builders/page_update/select';
import { fixture as statusFixture } from '../fixtures/builders/page_update/status';
import { fixture as titleFixture } from '../fixtures/builders/page_update/title';
import { fixture as urlFixture } from '../fixtures/builders/page_update/url';
import { fixture as withCoverFixture } from '../fixtures/builders/page_update/with_cover';
import { fixture as withIconFixture } from '../fixtures/builders/page_update/with_icon';

import { build } from './page_update';

describe('> Testing page update builder', () => {
  test.each([
    { name: 'archive_page', fixture: archivePageFixture },
    { name: 'checkbox', fixture: checkboxFixture },
    { name: 'date', fixture: dateFixture },
    { name: 'email', fixture: emailFixture },
    { name: 'files', fixture: filesFixture },
    { name: 'multi_select', fixture: multiSelectFixture },
    { name: 'number', fixture: numberFixture },
    { name: 'people', fixture: peopleFixture },
    { name: 'phone_number', fixture: phoneNumberFixture },
    { name: 'relation', fixture: relationFixture },
    { name: 'rich_text', fixture: richTextFixture },
    { name: 'select', fixture: selectFixture },
    { name: 'status', fixture: statusFixture },
    { name: 'title', fixture: titleFixture },
    { name: 'url', fixture: urlFixture },
    { name: 'with_cover', fixture: withCoverFixture },
    { name: 'with_icon', fixture: withIconFixture },
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
