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
import { buildPageCreate } from 'notion-toolbox';

// `payload` can be used to call Notion SDK's `client.pages.create()`
const payload = buildPageCreate(MY_DB_SCHEMA, 'my-database-id', {
  'Name': 'My new page',
  'Tags': ['Tag 1', 'Tag 2'],
  'Other type': 'Other value',
});
```

Or even using the full power of Typescript:

```ts
import { buildPageCreate, PropertyType } from 'notion-toolbox';

enum MyDbColumn {
  Name = 'Name',
  Tags = 'Tags',
  OtherType = 'Other type',
}

const MY_DB_SCHEMA: Record<MyDbColumn, PropertyType> = {
  [MyDbColumn.Name]: 'title',
  [MyDbColumn.Tags]: 'multi_select',
  [MyDbColumn.OtherType]: 'select',
};

const payload = buildPageCreate<MyDbColumn>(MY_DB_SCHEMA, 'my-database-id', {
  [MyDbColumns.Name]: 'My new page',
  [MyDbColumns.Tags]: ['Tag 1', 'Tag 2'],
  [MyDbColumns.OtherType]: 'Other value',
});
```

### List of available builders



## To do
- [ ] Test: database_query builder
- [ ] Test: read_page_property tool
- [ ] Builder: block_create_children
- [ ] Builder: block_delete
- [ ] Builder: block_update
- [ ] Builder: database_create
- [ ] Builder: database_update
- [ ] Builder: search
- [ ] Tool: copy_database_content

## License
[MIT](https://opensource.org/licenses/MIT)
