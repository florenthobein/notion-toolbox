import 'jest';
import { FIXTURE_DB_TYPES, FixtureDB } from '../fixtures/fixture.shared';
import { build } from './database_query';
import { fixture as checkboxFixture } from '../fixtures/builders/database_query/checkbox';
import { fixture as createdByFixture } from '../fixtures/builders/database_query/created_by';
import { fixture as createdTimeFixture } from '../fixtures/builders/database_query/created_time';
import { fixture as dateFixture } from '../fixtures/builders/database_query/date';
import { fixture as emailFixture } from '../fixtures/builders/database_query/email';
import { fixture as filesFixture } from '../fixtures/builders/database_query/files';
import { fixture as formulaFixture } from '../fixtures/builders/database_query/formula';
import { fixture as lastEditedByFixture } from '../fixtures/builders/database_query/last_edited_time';
import { fixture as lastEditedTimeFixture } from '../fixtures/builders/database_query/last_created_by';
import { fixture as multiSelectFixture } from '../fixtures/builders/database_query/multi_select';
import { fixture as numberFixture } from '../fixtures/builders/database_query/number';
import { fixture as peopleFixture } from '../fixtures/builders/database_query/people';
import { fixture as phoneNumberFixture } from '../fixtures/builders/database_query/phone_number';
import { fixture as relationFixture } from '../fixtures/builders/database_query/relation';
import { fixture as richTextFixture } from '../fixtures/builders/database_query/rich_text';
import { fixture as rollupFixture } from '../fixtures/builders/database_query/rollup';
import { fixture as selectFixture } from '../fixtures/builders/database_query/select';
import { fixture as statusFixture } from '../fixtures/builders/database_query/status';
import { fixture as titleFixture } from '../fixtures/builders/database_query/title';
import { fixture as urlFixture } from '../fixtures/builders/database_query/url';
import { fixture as withAndFixture } from '../fixtures/builders/database_query/with_and';
import { fixture as withOrFixture } from '../fixtures/builders/database_query/with_or';
import { fixture as withDifferentConditionFixture } from '../fixtures/builders/database_query/with_condition';
import { fixture as withComplexMixFixture } from '../fixtures/builders/database_query/with_complex_mix';
import { fixture as withWrongConditionFixture } from '../fixtures/builders/database_query/with_wrong_condition';

describe('> Testing database query builder', () => {
  test.each([
    { name: 'checkbox', fixture: checkboxFixture },
    { name: 'created_by', fixture: createdByFixture },
    { name: 'created_time', fixture: createdTimeFixture },
    { name: 'date', fixture: dateFixture },
    { name: 'email', fixture: emailFixture },
    { name: 'files', fixture: filesFixture },
    { name: 'last_edited_by', fixture: lastEditedByFixture },
    { name: 'last_edited_time', fixture: lastEditedTimeFixture },
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
    { name: 'with_and', fixture: withAndFixture },
    { name: 'with_or', fixture: withOrFixture },
    {
      name: 'with_different_condition',
      fixture: withDifferentConditionFixture,
    },
    { name: 'with_complex_mix', fixture: withComplexMixFixture },
  ])('$name', async ({ fixture: { filter, expectedPayload } }) => {
    const payload = build<FixtureDB>(FIXTURE_DB_TYPES, filter);
    expect(payload).toMatchObject(expectedPayload);
  });

  test.each([
    { name: 'formula', fixture: formulaFixture, error: 'Not implemented' },
    { name: 'rollup', fixture: rollupFixture, error: 'Not implemented' },
    {
      name: 'with_wrong_condition',
      fixture: withWrongConditionFixture,
      error: 'Condition before not allowed to filter type select',
    },
  ])('$name', async ({ fixture: { filter }, error }) => {
    const building = () => {
      build<FixtureDB>(FIXTURE_DB_TYPES, filter);
    };
    expect(building).toThrow(new Error(error));
  });
});
