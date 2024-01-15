import { TableColumnType } from 'antd';

export interface CountFilterType {
  options: { label: string; value: number }[];
}

type FilterDropdownType = Exclude<
  TableColumnType<DataType>['filterDropdown'],
  React.ReactNode
>;
export type FilterConfirmProps = Parameters<FilterDropdownType>[0]['confirm'];

export interface DataType {
  key: React.Key;
  shopName: string;
  shopCode: string;
  isApi: string;
  isAppliedEngine: string;
  qa: string;
}

export type DataIndex = keyof DataType;
