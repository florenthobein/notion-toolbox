# Notion toolbox

Various tools to easily manipulate Notion's API, to be used with [Notion JS SDK](https://github.com/makenotion/notion-sdk-js), in Typescript.

## Payload builders
Easily create type coherent payloads for the complex queries.\
First, configure your database schema by associating column names with their types.
```ts
const MY_DB_SCHEMA = {
  'Name': 'title',
  'Tags': 'multi_select',
  'Other type': 'select',
};
```
You can then pass it to the different builders depending on your use case:
```ts
import { page_create } from 'notion-toolbox';

// `payload` can be used to call Notion SDK's `client.pages.create()`
const payload = page_create(MY_DB_SCHEMA, 'my-database-id', {
  'Name': 'My new page',
  'Tags': ['Tag 1', 'Tag 2'],
  'Other type': 'Other value',
});
```
Or even using the full power of Typescript:
```ts
import { page_create } from 'notion-toolbox/builders';
import { PropertyType } from 'notion-toolbox/types';

enum MyDb {
  Name = 'Name',
  Tags = 'Tags',
  OtherType = 'Other type',
}

const MY_DB_SCHEMA: Record<MyDb, PropertyType> = {
  [MyDb.Name]: 'title',
  [MyDb.Tags]: 'multi_select',
  [MyDb.OtherType]: 'select',
};

const payload = page_create<MyDb>(MY_DB_SCHEMA, 'my-database-id', {
  [MyDb.Name]: 'My new page',
  [MyDb.Tags]: ['Tag 1', 'Tag 2'],
  [MyDb.OtherType]: 'Other value',
});
```

### List of available builders

## To do

### Feature
- copy_database_content tool

### Builders
- block_create_children
- block_delete
- block_update
- database_create
- database_update
- search

### Tests
- database_query builder
- read_page_property tool
