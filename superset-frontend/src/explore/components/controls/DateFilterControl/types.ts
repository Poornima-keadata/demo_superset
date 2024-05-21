/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
export type SelectOptionType = {
  value: string;
  label: string;
};

export type FrameType =
  | 'Common'
  | 'Calendar'
  | 'Custom'
  | 'Advanced'
  | 'No filter';

export type DateTimeGrainType =
  | 'second'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year';

export type CustomRangeKey =
  | 'sinceMode'
  | 'sinceDatetime'
  | 'sinceGrain'
  | 'sinceGrainValue'
  | 'untilMode'
  | 'untilDatetime'
  | 'untilGrain'
  | 'untilGrainValue'
  | 'anchorMode'
  | 'anchorValue';

export type DateTimeModeType = 'specific' | 'relative' | 'now' | 'today';

export type CustomRangeType = {
  sinceMode: DateTimeModeType;
  sinceDatetime: string;
  sinceGrain: DateTimeGrainType;
  sinceGrainValue: number;
  untilMode: DateTimeModeType;
  untilDatetime: string;
  untilGrain: DateTimeGrainType;
  untilGrainValue: number;
  anchorMode: 'now' | 'specific';
  anchorValue: string;
};

export type CustomRangeDecodeType = {
  customRange: CustomRangeType;
  matchedFlag: boolean;
};

export type CommonRangeType =
  | 'Last day'
  | 'Last week'
  | 'Last month'
  | 'Last quarter'
  | 'Last year';

export const PreviousCalendarWeek = 'current week';
export const PreviousCalendarMonth = 'current month';
export const PreviousCalendarYear = 'current year';
export const PreviousCalendarDay = 'current day';
export type CalendarRangeType =
  | typeof PreviousCalendarDay
  | typeof PreviousCalendarWeek
  | typeof PreviousCalendarMonth
  | typeof PreviousCalendarYear;

export const CurrentWeek = 'current week';
export const CurrentMonth = 'current month';
export const CurrentYear = 'current year';
export const CurrentDay = 'current day';
export type CurrentCalenderRangeType =
  | typeof CurrentWeek
  | typeof CurrentMonth
  | typeof CurrentYear
  | typeof CurrentDay;

export type FrameComponentProps = {
  onChange: (timeRange: string) => void;
  value: string;
};

export interface DateFilterControlProps {
  name: string;
  onChange: (timeRange: string) => void;
  value?: string;
  onOpenPopover?: () => void;
  onClosePopover?: () => void;
  overlayStyle?: 'Modal' | 'Popover';
  isOverflowingFilterBar?: boolean;
}
