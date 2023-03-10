import { FilterCondition, FilterConditionEnum, PropertyType } from '../types';

const ALLOWED_FILTER_CONDITIONS: Record<
  Exclude<PropertyType, 'formula' | 'rollup'>,
  FilterCondition[]
> = {
  title: [
    FilterConditionEnum.equals,
    FilterConditionEnum.does_not_equal,
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.starts_with,
    FilterConditionEnum.ends_with,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  rich_text: [
    FilterConditionEnum.equals,
    FilterConditionEnum.does_not_equal,
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.starts_with,
    FilterConditionEnum.ends_with,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  number: [
    FilterConditionEnum.equals,
    FilterConditionEnum.does_not_equal,
    FilterConditionEnum.greater_than,
    FilterConditionEnum.less_than,
    FilterConditionEnum.greater_than_or_equal_to,
    FilterConditionEnum.less_than_or_equal_to,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  checkbox: [FilterConditionEnum.equals, FilterConditionEnum.does_not_equal],
  select: [
    FilterConditionEnum.equals,
    FilterConditionEnum.does_not_equal,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  multi_select: [
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  status: [
    FilterConditionEnum.equals,
    FilterConditionEnum.does_not_equal,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  date: [
    FilterConditionEnum.equals,
    FilterConditionEnum.before,
    FilterConditionEnum.after,
    FilterConditionEnum.on_or_before,
    FilterConditionEnum.on_or_after,
    FilterConditionEnum.past_week,
    FilterConditionEnum.past_month,
    FilterConditionEnum.past_year,
    FilterConditionEnum.next_week,
    FilterConditionEnum.next_month,
    FilterConditionEnum.next_year,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  people: [
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  files: [FilterConditionEnum.is_empty, FilterConditionEnum.is_not_empty],
  url: [
    FilterConditionEnum.equals,
    FilterConditionEnum.does_not_equal,
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.starts_with,
    FilterConditionEnum.ends_with,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  email: [
    FilterConditionEnum.equals,
    FilterConditionEnum.does_not_equal,
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.starts_with,
    FilterConditionEnum.ends_with,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  phone_number: [
    FilterConditionEnum.equals,
    FilterConditionEnum.does_not_equal,
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.starts_with,
    FilterConditionEnum.ends_with,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  relation: [
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  created_by: [
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  created_time: [
    FilterConditionEnum.equals,
    FilterConditionEnum.before,
    FilterConditionEnum.after,
    FilterConditionEnum.on_or_before,
    FilterConditionEnum.on_or_after,
    FilterConditionEnum.past_week,
    FilterConditionEnum.past_month,
    FilterConditionEnum.past_year,
    FilterConditionEnum.next_week,
    FilterConditionEnum.next_month,
    FilterConditionEnum.next_year,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  last_edited_by: [
    FilterConditionEnum.contains,
    FilterConditionEnum.does_not_contain,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
  last_edited_time: [
    FilterConditionEnum.equals,
    FilterConditionEnum.before,
    FilterConditionEnum.after,
    FilterConditionEnum.on_or_before,
    FilterConditionEnum.on_or_after,
    FilterConditionEnum.past_week,
    FilterConditionEnum.past_month,
    FilterConditionEnum.past_year,
    FilterConditionEnum.next_week,
    FilterConditionEnum.next_month,
    FilterConditionEnum.next_year,
    FilterConditionEnum.is_empty,
    FilterConditionEnum.is_not_empty,
  ],
};

export function assertCoherentCustomFilterCondition(
  type: PropertyType,
  customFilterCondition: FilterConditionEnum
): void {
  if (!customFilterCondition) return;
  if (!ALLOWED_FILTER_CONDITIONS[type].includes(customFilterCondition)) {
    throw new Error(
      `Condition ${customFilterCondition} not allowed to filter type ${type}`
    );
  }
}
