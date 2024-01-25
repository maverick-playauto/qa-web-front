import { TableColumnType } from 'antd';
import { Dispatch, SetStateAction } from 'react';

export interface CountFilterType {
  options: { label: string; value: number }[];
}

type FilterDropdownType = Exclude<
  TableColumnType<DataType>['filterDropdown'],
  React.ReactNode
>;
export type FilterConfirmProps = Parameters<FilterDropdownType>[0]['confirm'];

export interface DataType {
  key: number;
  shopName: string;
  shopCode: string;
  isApi: string;
  isAppliedEngine: string;
  qa: string;
}

export type DataIndex = keyof DataType;

export interface MainPaginationType {
  setPaginationConfig: Dispatch<
    SetStateAction<{ currentPage: number; pageSize: number }>
  >;
  total: number;
}
