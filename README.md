# Notion toolbox

Various tools to easily manipulate Notion's API, to be used with [Notion JS SDK](https://github.com/makenotion/notion-sdk-js), in Typescript.

> 🔥 **Not yet production-ready** 🔥

## Payload builders

Easily create type coherent payloads for the complex queries.\
First, configure your database schema by associating column names with their types.

```ts
const MY_DB_SCHEMA = {
  Name: 'title',
  Tags: 'multi_select',
  'Other column': 'select',
};
```

You can then pass it to the different builders depending on your use case:

```ts
import { buildPageCreate } from 'notion-toolbox';

// `payload` can be used to call Notion SDK's `client.pages.create()`
const payload = buildPageCreate(MY_DB_SCHEMA, 'my-database-id', {
  Name: 'My new page',
  Tags: ['Tag 1', 'Tag 2'],
  'Other column': 'Other value',
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

### `buildDatabaseQuery`

Build the payload for Notion's [Database Query endpoint](https://developers.notion.com/reference/post-database-query)

```ts
const payload = buildDatabaseQuery<MyDbColumn>(MY_DB_SCHEMA, {
  [MyDbColumns.Tags]: 'Tag 1',
});
await notion.databases.query(payload);
```

The builder is going to use the condition operator that makes more sense by default, but you can supply the one you want.

```ts
const payload = buildDatabaseQuery<MyDbColumn>(MY_DB_SCHEMA, {
  [MyDbColumns.Tags]: { is_empty: true },
});
await notion.databases.query(payload);
```

You can also filter with the `or` operand, and combine complex queries.

```ts
const payload = buildDatabaseQuery<MyDbColumn>(MY_DB_SCHEMA, {
  or: [
    { [MyDbColumns.Tags]: { is_empty: true } },
    {
      and: [{ [MyDbColumns.Tags]: 'Tag 1' }, { [MyDbColumns.CreatedBy]: 'me' }],
    },
  ],
});
await notion.databases.query(payload);
```

### `buildPageCreate`

Build the payload for Notion's [Page Creation endpoint](https://developers.notion.com/reference/post-page)

```ts
const payload = buildPageCreate<MyDbColumn>(MY_DB_SCHEMA, MY_DB_ID, {
  [MyDbColumns.Name]: 'My new page',
  [MyDbColumns.Tags]: ['Tag 1', 'Tag 2'],
  [MyDbColumns.OtherType]: 'Other value',
});
await notionClient.pages.create(payload);
```

### `buildPageUpdate`

Build the payload for Notion's [Page Update endpoint](https://developers.notion.com/reference/update-a-database)

```ts
const payload = buildPageUpdate<MyDbColumn>(MY_DB_SCHEMA, MY_PAGE_ID, {
  [MyDbColumns.Name]: 'My other page',
});
await notionClient.pages.update(payload);
```

## Tools

### `readPageProperty`

When a page is retrieved, use this tool to read one of it's property.

```ts
// `myPage` was retrieved from a previous API call
const propertyValues: string[] = readPageProperty<MyDbColumn>(
  myPage,
  MyDbColumns.Tags,
  MY_DB_SCHEMA
);
```

## To do

### Builders

- [ ] sorting for the `database_query` builder
- [ ] possibility to provide content to the `page_create` builder
- [ ] new `block_create_children` builder
- [ ] new `block_delete` builder
- [ ] new `block_update` builder
- [ ] new `database_create` builder
- [ ] new `database_update` builder
- [ ] new `search` builder

### Tools

- [ ] tests for the `read_page_property` tool
- [ ] new `duplicate_pages` tool that duplicates a set of pages, their attributes and content

### Wrappers

Instead of always providing builders with the schema of the databases we manipulate and the available properties, why not configuring an object that would provide all the builders from the get go?
Something with an API along the lines of

```ts
const myDbWrapper = new DbWrapper<MyDbColumn>('my-database-id', MY_DB_SCHEMA);
const payload = myDbWrapper.buildPageCreate({
  [MyDbColumns.Name]: 'My new page',
  [MyDbColumns.Tags]: ['Tag 1', 'Tag 2'],
  [MyDbColumns.OtherType]: 'Other value',
});
```

and even

```ts
// `myPage` was retrieved from a previous API call
const myPageWrapper = myDbWrapper.page(myPage);
const propertyValues = myPageWrapper.getProperty(MyDbColumns.Tags);
```

## License

[MIT](https://opensource.org/licenses/MIT)
