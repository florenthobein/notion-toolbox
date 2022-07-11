import { EmptyObject } from './base';

export type FilterParam =
  | {
      or: Array<
        | PropertyFilter
        | {
            or: Array<PropertyFilter>;
          }
        | {
            and: Array<PropertyFilter>;
          }
      >;
    }
  | {
      and: Array<
        | PropertyFilter
        | {
            or: Array<PropertyFilter>;
          }
        | {
            and: Array<PropertyFilter>;
          }
      >;
    }
  | PropertyFilter;

export type FilterCondition =
  | 'after'
  | 'any'
  | 'before'
  | 'checkbox'
  | 'contains'
  | 'date'
  | 'does_not_contain'
  | 'does_not_equal'
  | 'ends_with'
  | 'equals'
  | 'every'
  | 'greater_than'
  | 'greater_than_or_equal_to'
  | 'is_empty'
  | 'is_not_empty'
  | 'less_than'
  | 'less_than_or_equal_to'
  | 'next_month'
  | 'next_week'
  | 'next_year'
  | 'none'
  | 'number'
  | 'on_or_after'
  | 'on_or_before'
  | 'past_month'
  | 'past_week'
  | 'past_year'
  | 'starts_with'
  | 'string';

export enum FilterConditionEnum {
  after = 'after',
  any = 'any',
  before = 'before',
  checkbox = 'checkbox',
  contains = 'contains',
  date = 'date',
  does_not_contain = 'does_not_contain',
  does_not_equal = 'does_not_equal',
  ends_with = 'ends_with',
  equals = 'equals',
  every = 'every',
  greater_than = 'greater_than',
  greater_than_or_equal_to = 'greater_than_or_equal_to',
  is_empty = 'is_empty',
  is_not_empty = 'is_not_empty',
  less_than = 'less_than',
  less_than_or_equal_to = 'less_than_or_equal_to',
  next_month = 'next_month',
  next_week = 'next_week',
  next_year = 'next_year',
  none = 'none',
  number = 'number',
  on_or_after = 'on_or_after',
  on_or_before = 'on_or_before',
  past_month = 'past_month',
  past_week = 'past_week',
  past_year = 'past_year',
  starts_with = 'starts_with',
  string = 'string',
}

// Copied from https://github.com/makenotion/notion-sdk-js/blob/main/src/api-endpoints.ts
export type PropertyFilter =
  | {
      title:
        | {
            equals: string;
          }
        | {
            does_not_equal: string;
          }
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            starts_with: string;
          }
        | {
            ends_with: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'title';
    }
  | {
      text:
        | {
            equals: string;
          }
        | {
            does_not_equal: string;
          }
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            starts_with: string;
          }
        | {
            ends_with: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'text';
    }
  | {
      rich_text:
        | {
            equals: string;
          }
        | {
            does_not_equal: string;
          }
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            starts_with: string;
          }
        | {
            ends_with: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'rich_text';
    }
  | {
      number:
        | {
            equals: number;
          }
        | {
            does_not_equal: number;
          }
        | {
            greater_than: number;
          }
        | {
            less_than: number;
          }
        | {
            greater_than_or_equal_to: number;
          }
        | {
            less_than_or_equal_to: number;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'number';
    }
  | {
      checkbox:
        | {
            equals: boolean;
          }
        | {
            does_not_equal: boolean;
          };
      property: string;
      type?: 'checkbox';
    }
  | {
      select:
        | {
            equals: string;
          }
        | {
            does_not_equal: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'select';
    }
  | {
      multi_select:
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'multi_select';
    }
  | {
      date:
        | {
            equals: string;
          }
        | {
            before: string;
          }
        | {
            after: string;
          }
        | {
            on_or_before: string;
          }
        | {
            on_or_after: string;
          }
        | {
            past_week: EmptyObject;
          }
        | {
            past_month: EmptyObject;
          }
        | {
            past_year: EmptyObject;
          }
        | {
            next_week: EmptyObject;
          }
        | {
            next_month: EmptyObject;
          }
        | {
            next_year: EmptyObject;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'date';
    }
  | {
      people:
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'people';
    }
  | {
      files:
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'files';
    }
  | {
      url:
        | {
            equals: string;
          }
        | {
            does_not_equal: string;
          }
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            starts_with: string;
          }
        | {
            ends_with: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'url';
    }
  | {
      email:
        | {
            equals: string;
          }
        | {
            does_not_equal: string;
          }
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            starts_with: string;
          }
        | {
            ends_with: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'email';
    }
  | {
      phone:
        | {
            equals: string;
          }
        | {
            does_not_equal: string;
          }
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            starts_with: string;
          }
        | {
            ends_with: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'phone';
    }
  | {
      phone_number:
        | {
            equals: string;
          }
        | {
            does_not_equal: string;
          }
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            starts_with: string;
          }
        | {
            ends_with: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'phone_number';
    }
  | {
      relation:
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'relation';
    }
  | {
      created_by:
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'created_by';
    }
  | {
      created_time:
        | {
            equals: string;
          }
        | {
            before: string;
          }
        | {
            after: string;
          }
        | {
            on_or_before: string;
          }
        | {
            on_or_after: string;
          }
        | {
            past_week: EmptyObject;
          }
        | {
            past_month: EmptyObject;
          }
        | {
            past_year: EmptyObject;
          }
        | {
            next_week: EmptyObject;
          }
        | {
            next_month: EmptyObject;
          }
        | {
            next_year: EmptyObject;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'created_time';
    }
  | {
      last_edited_by:
        | {
            contains: string;
          }
        | {
            does_not_contain: string;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'last_edited_by';
    }
  | {
      last_edited_time:
        | {
            equals: string;
          }
        | {
            before: string;
          }
        | {
            after: string;
          }
        | {
            on_or_before: string;
          }
        | {
            on_or_after: string;
          }
        | {
            past_week: EmptyObject;
          }
        | {
            past_month: EmptyObject;
          }
        | {
            past_year: EmptyObject;
          }
        | {
            next_week: EmptyObject;
          }
        | {
            next_month: EmptyObject;
          }
        | {
            next_year: EmptyObject;
          }
        | {
            is_empty: true;
          }
        | {
            is_not_empty: true;
          };
      property: string;
      type?: 'last_edited_time';
    }
  | {
      formula:
        | {
            text:
              | {
                  equals: string;
                }
              | {
                  does_not_equal: string;
                }
              | {
                  contains: string;
                }
              | {
                  does_not_contain: string;
                }
              | {
                  starts_with: string;
                }
              | {
                  ends_with: string;
                }
              | {
                  is_empty: true;
                }
              | {
                  is_not_empty: true;
                };
          }
        | {
            checkbox:
              | {
                  equals: boolean;
                }
              | {
                  does_not_equal: boolean;
                };
          }
        | {
            number:
              | {
                  equals: number;
                }
              | {
                  does_not_equal: number;
                }
              | {
                  greater_than: number;
                }
              | {
                  less_than: number;
                }
              | {
                  greater_than_or_equal_to: number;
                }
              | {
                  less_than_or_equal_to: number;
                }
              | {
                  is_empty: true;
                }
              | {
                  is_not_empty: true;
                };
          }
        | {
            date:
              | {
                  equals: string;
                }
              | {
                  before: string;
                }
              | {
                  after: string;
                }
              | {
                  on_or_before: string;
                }
              | {
                  on_or_after: string;
                }
              | {
                  past_week: EmptyObject;
                }
              | {
                  past_month: EmptyObject;
                }
              | {
                  past_year: EmptyObject;
                }
              | {
                  next_week: EmptyObject;
                }
              | {
                  next_month: EmptyObject;
                }
              | {
                  next_year: EmptyObject;
                }
              | {
                  is_empty: true;
                }
              | {
                  is_not_empty: true;
                };
          };
      property: string;
      type?: 'formula';
    }
  | {
      rollup:
        | {
            any:
              | {
                  text:
                    | {
                        equals: string;
                      }
                    | {
                        does_not_equal: string;
                      }
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        starts_with: string;
                      }
                    | {
                        ends_with: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  number:
                    | {
                        equals: number;
                      }
                    | {
                        does_not_equal: number;
                      }
                    | {
                        greater_than: number;
                      }
                    | {
                        less_than: number;
                      }
                    | {
                        greater_than_or_equal_to: number;
                      }
                    | {
                        less_than_or_equal_to: number;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  checkbox:
                    | {
                        equals: boolean;
                      }
                    | {
                        does_not_equal: boolean;
                      };
                }
              | {
                  select:
                    | {
                        equals: string;
                      }
                    | {
                        does_not_equal: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  multi_select:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  relation:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  date:
                    | {
                        equals: string;
                      }
                    | {
                        before: string;
                      }
                    | {
                        after: string;
                      }
                    | {
                        on_or_before: string;
                      }
                    | {
                        on_or_after: string;
                      }
                    | {
                        past_week: EmptyObject;
                      }
                    | {
                        past_month: EmptyObject;
                      }
                    | {
                        past_year: EmptyObject;
                      }
                    | {
                        next_week: EmptyObject;
                      }
                    | {
                        next_month: EmptyObject;
                      }
                    | {
                        next_year: EmptyObject;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  people:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  files:
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                };
          }
        | {
            none:
              | {
                  text:
                    | {
                        equals: string;
                      }
                    | {
                        does_not_equal: string;
                      }
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        starts_with: string;
                      }
                    | {
                        ends_with: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  number:
                    | {
                        equals: number;
                      }
                    | {
                        does_not_equal: number;
                      }
                    | {
                        greater_than: number;
                      }
                    | {
                        less_than: number;
                      }
                    | {
                        greater_than_or_equal_to: number;
                      }
                    | {
                        less_than_or_equal_to: number;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  checkbox:
                    | {
                        equals: boolean;
                      }
                    | {
                        does_not_equal: boolean;
                      };
                }
              | {
                  select:
                    | {
                        equals: string;
                      }
                    | {
                        does_not_equal: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  multi_select:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  relation:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  date:
                    | {
                        equals: string;
                      }
                    | {
                        before: string;
                      }
                    | {
                        after: string;
                      }
                    | {
                        on_or_before: string;
                      }
                    | {
                        on_or_after: string;
                      }
                    | {
                        past_week: EmptyObject;
                      }
                    | {
                        past_month: EmptyObject;
                      }
                    | {
                        past_year: EmptyObject;
                      }
                    | {
                        next_week: EmptyObject;
                      }
                    | {
                        next_month: EmptyObject;
                      }
                    | {
                        next_year: EmptyObject;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  people:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  files:
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                };
          }
        | {
            every:
              | {
                  text:
                    | {
                        equals: string;
                      }
                    | {
                        does_not_equal: string;
                      }
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        starts_with: string;
                      }
                    | {
                        ends_with: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  number:
                    | {
                        equals: number;
                      }
                    | {
                        does_not_equal: number;
                      }
                    | {
                        greater_than: number;
                      }
                    | {
                        less_than: number;
                      }
                    | {
                        greater_than_or_equal_to: number;
                      }
                    | {
                        less_than_or_equal_to: number;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  checkbox:
                    | {
                        equals: boolean;
                      }
                    | {
                        does_not_equal: boolean;
                      };
                }
              | {
                  select:
                    | {
                        equals: string;
                      }
                    | {
                        does_not_equal: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  multi_select:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  relation:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  date:
                    | {
                        equals: string;
                      }
                    | {
                        before: string;
                      }
                    | {
                        after: string;
                      }
                    | {
                        on_or_before: string;
                      }
                    | {
                        on_or_after: string;
                      }
                    | {
                        past_week: EmptyObject;
                      }
                    | {
                        past_month: EmptyObject;
                      }
                    | {
                        past_year: EmptyObject;
                      }
                    | {
                        next_week: EmptyObject;
                      }
                    | {
                        next_month: EmptyObject;
                      }
                    | {
                        next_year: EmptyObject;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  people:
                    | {
                        contains: string;
                      }
                    | {
                        does_not_contain: string;
                      }
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                }
              | {
                  files:
                    | {
                        is_empty: true;
                      }
                    | {
                        is_not_empty: true;
                      };
                };
          }
        | {
            date:
              | {
                  equals: string;
                }
              | {
                  before: string;
                }
              | {
                  after: string;
                }
              | {
                  on_or_before: string;
                }
              | {
                  on_or_after: string;
                }
              | {
                  past_week: EmptyObject;
                }
              | {
                  past_month: EmptyObject;
                }
              | {
                  past_year: EmptyObject;
                }
              | {
                  next_week: EmptyObject;
                }
              | {
                  next_month: EmptyObject;
                }
              | {
                  next_year: EmptyObject;
                }
              | {
                  is_empty: true;
                }
              | {
                  is_not_empty: true;
                };
          }
        | {
            number:
              | {
                  equals: number;
                }
              | {
                  does_not_equal: number;
                }
              | {
                  greater_than: number;
                }
              | {
                  less_than: number;
                }
              | {
                  greater_than_or_equal_to: number;
                }
              | {
                  less_than_or_equal_to: number;
                }
              | {
                  is_empty: true;
                }
              | {
                  is_not_empty: true;
                };
          };
      property: string;
      type?: 'rollup';
    };
