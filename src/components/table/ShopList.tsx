import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import QA from './QA';
import { useShopListCountFilter } from 'store/store';

type FilterDropdownType = Exclude<
  TableColumnType<DataType>['filterDropdown'],
  React.ReactNode
>;
type FilterConfirmProps = Parameters<FilterDropdownType>[0]['confirm'];

interface DataType {
  key: React.Key;
  shopName: string;
  shopCode: string;
  isApi: string;
  isAppliedEngine: string;
  qa: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: 1,
    shopName: '옥션',
    shopCode: 'A001',
    isApi: 'X',
    isAppliedEngine: 'X',
    qa: '',
  },
  {
    key: 2,
    shopName: 'CJMall',
    shopCode: 'A004',
    isApi: 'X',
    isAppliedEngine: 'O',
    qa: '',
  },
  {
    key: 3,
    shopName: 'GMarket',
    shopCode: 'A006',
    isApi: 'X',
    isAppliedEngine: 'X',
    qa: '',
  },
  {
    key: 4,
    shopName: '스마트스토어',
    shopCode: 'A077',
    isApi: 'O',
    isAppliedEngine: 'X',
    qa: '',
  },
  {
    key: 5,
    shopName: '11번가',
    shopCode: 'A112',
    isApi: 'O',
    isAppliedEngine: 'O',
    qa: '',
  },
  {
    key: 6,
    shopName: '11번가(신규)',
    shopCode: 'A113',
    isApi: 'O',
    isAppliedEngine: 'X',
    qa: '',
  },
  {
    key: 7,
    shopName: '현대H몰',
    shopCode: 'A131',
    isApi: 'O',
    isAppliedEngine: 'O',
    qa: '',
  },
  {
    key: 8,
    shopName: '위메프2.0',
    shopCode: 'B719',
    isApi: 'O',
    isAppliedEngine: 'X',
    qa: '',
  },
  {
    key: 9,
    shopName: '카카오톡스토어',
    shopCode: 'B688',
    isApi: 'O',
    isAppliedEngine: 'X',
    qa: '',
  },
  {
    key: 10,
    shopName: '티몬',
    shopCode: 'B956',
    isApi: 'O',
    isAppliedEngine: 'X',
    qa: '',
  },
  {
    key: 11,
    shopName: '오늘의집',
    shopCode: 'B959',
    isApi: 'O',
    isAppliedEngine: 'O',
    qa: '',
  },
];

const ShopList: React.FC = () => {
  const { count } = useShopListCountFilter();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterConfirmProps,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex,
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current, 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
      width: '5%',
    },
    {
      title: '쇼핑몰명',
      dataIndex: 'shopName',
      key: 'shopName',
      width: '24%',
      ...getColumnSearchProps('shopName'),
    },
    {
      title: '쇼핑몰코드',
      dataIndex: 'shopCode',
      key: 'shopCode',
      width: '24%',
      ...getColumnSearchProps('shopCode'),
    },
    {
      title: 'API여부',
      dataIndex: 'isApi',
      key: 'isApi',
      width: '21%',
    },
    {
      title: '엔진적용여부',
      dataIndex: 'isAppliedEngine',
      key: 'isAppliedEngine',
      width: '21%',
    },
    Table.EXPAND_COLUMN,
    {
      title: 'QA',
      dataIndex: 'qa',
      key: 'qa',
      width: '5%',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: count }}
      expandable={{
        expandedRowRender: record => <QA shopCode={record.shopCode} />,
      }}
    />
  );
};

export default ShopList;
